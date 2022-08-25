import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
} from 'firebase/auth';

import {
  getDocs,
  getDoc,
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore/lite';

import FirebaseConfig from '../assets/firebase-config.json';

/**
 * Class responsible for reading and writing to Firestore database.
 *
 * NOTE: Courses and reviews have been separated to support an easier transition
 * for lazy loading in the future
 */
class Database {
  /**
   * Initialise connection to Firestore database.
   * @param {object} firebaseConfig
   */
  constructor(firebaseConfig) {
    this.db = getFirestore(initializeApp(firebaseConfig));
    this.auth = getAuth();
  }

  /**
   * @return {array} List of admin emails
   */
  async getAdmins() {
    const docRef = doc(this.db, 'users', 'admins');
    const docSnap = await getDoc(docRef);

    return docSnap.data().emails;
  }

  /**
   * Retrieve snapshot for a given collection
   * @param {string} collectionName
   * @return {QuerySnapshot}
   */
  async getSnapshot(collectionName) {
    const col = collection(this.db, collectionName);
    return await getDocs(col);
  }

  /**
   * Gets all courses and reviews, with reviews nested in the course object
   * @return {object}
   */
  async getCoursesAndReviews() {
    const courses = await this.getCourses();
    const reviews = await this.getReviews();

    Object.keys(courses).forEach((courseCode) => {
      courses[courseCode].reviews = courses[courseCode].reviews.map((reviewId) => ({
        id: reviewId,
        ...reviews[reviewId],
      }));
    });

    return courses;
  }

  /**
   * Gets all courses from database
   * @return {object}
   */
  async getCourses() {
    const courses = {};

    const coursesSnapshot = await this.getSnapshot('courses');
    coursesSnapshot.docs.forEach((doc) => {
      courses[doc.id] = doc.data();
    });

    return courses;
  }

  /**
   * Gets all reviews from database
   * @return {object}
   */
  async getReviews() {
    const reviews = {};

    const reviewsSnapshot = await this.getSnapshot('reviews');
    reviewsSnapshot.docs.forEach((doc) => {
      reviews[doc.id] = doc.data();
    });

    return reviews;
  }

  /**
   * Gets all majors from database
   * @return {object}
   */
  async getMajors() {
    const majors = {};

    const majorsSnapshot = await this.getSnapshot('majors');
    majorsSnapshot.docs.forEach((doc) => {
      majors[doc.id] = doc.data();
    });

    return majors;
  }

  /**
   * Appends a new review to the course's reviews
   * NOTE: This function does not change the global state for you
   * @param {object} review
   * @return {string} the id of the new review
   */
  async addReview(review) {
    // Default values
    const reviewObject = {
      author: 'anonymous',
      title: '',
      comment: '',
      courseCode: 'BINF2010',
      displayAuthor: false,
      rating: {
        overall: 3,
        enjoyment: 3,
        usefulness: 3,
        manageability: 3,
      },
      recommendedCourses: [],
      termTaken: '21T2',
      timestamp: Date.now(),
    };

    Object.assign(reviewObject, review);

    // Uploads review object into database and retrieves auto generated id
    const docRef = await addDoc(collection(this.db, 'reviews'), reviewObject);

    // Insert auto generated id into course object
    const courseRef = doc(this.db, 'courses', reviewObject.courseCode);
    if (reviewObject.courseCode === 'COMP4920' || reviewObject.courseCode === 'SENG4920') {
      const courseCode_ = (reviewObject.courseCode === 'COMP4920') ? 'SENG4920' : 'COMP4920';
      const courseRef_ = doc(this.db, 'courses', courseCode_);
      await updateDoc(courseRef_, {
        reviews: arrayUnion(docRef.id),
      });
    }
    await updateDoc(courseRef, {
      reviews: arrayUnion(docRef.id),
    });

    return docRef.id;
  }

  /**
   *
   * @param {string} reviewId
   * @param {string} reason
   */
  async flagReview(reviewId, reason) {
    // TODO ELEC-274: fix this so that non-logged in users can also flag a review
    try {
      await addDoc(collection(this.db, 'flagged'), { reviewId, reason });
    } catch {}
  }

  /**
   * Gets flagged reviews
   */
  async getFlaggedReviews() {
    const flaggedReviewsSnapshot = await this.getSnapshot('flagged');
    const flaggedReviews = flaggedReviewsSnapshot.docs.map((doc) => doc.data());
    const allReviews = await this.getReviews();

    return flaggedReviews.filter((flagObject) => (flagObject.reviewId in allReviews)).map((flagObject) => {
      return { ...flagObject, review: allReviews[flagObject.reviewId] };
    });
  }

  /**
   * Logs user in. If user has never logged into CSElectives before, will create new account
   * @param {string} zid the user's zID
   * @param {string} zpass the user's password
   * @param {string} displayName the user's display name
   */
  async login(zid, zpass, displayName) {
    // TODO ELEC-199: handle password changes from myunsw
    try {
      await signInWithEmailAndPassword(this.auth, `${zid}@unsw.edu.au`, zid);
    } catch (error) {
      if (error.code == AuthErrorCodes.USER_DELETED) {
        // User not found, so create account and sign in
        const userCredential = await createUserWithEmailAndPassword(this.auth, `${zid}@unsw.edu.au`, zid);
        updateProfile(userCredential.user, {
          displayName,
        });
      } else {
        throw error;
      }
    }
  }

  /**
   * deletes a review
   * 1. deletes the review id from the course object's list of review IDs
   * 2. deletes the review object from the reviews collection
   * @param {string} reviewId
   * @param {string} courseCode
   *
   */
  async deleteReview(reviewId, courseCode) {
    // Delete review ID from the course object's list of review IDs
    const courseRef = doc(this.db, 'courses', courseCode);
    if (courseCode === 'COMP4920' || courseCode === 'SENG4920') {
      const courseCode_ = (courseCode === 'COMP4920') ? 'SENG4920' : 'COMP4920';
      const courseRef_ = doc(this.db, 'courses', courseCode_);
      updateDoc(courseRef_, {
        reviews: arrayRemove(reviewId),
      });
    }
    updateDoc(courseRef, {
      reviews: arrayRemove(reviewId),
    });

    // Delete review object from the 'reviews' collection in Google Firestore
    deleteDoc(doc(this.db, 'reviews', reviewId));
  }

  /**
   * Signs the current user out
   */
  async signOut() {
    signOut(this.auth);
  }
}

export default new Database(FirebaseConfig);
