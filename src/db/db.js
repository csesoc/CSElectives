import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
} from 'firebase/auth';

import { getDocs, getFirestore, collection, addDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore/lite';

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
      courses[courseCode].reviews = courses[courseCode].reviews.map((reviewId) => {
        return reviews[reviewId];
      });
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
        enjoyment: 3,
        overall: 3,
        workload: 3,
        difficulty: 3,
        usefulness: 3,
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
    await updateDoc(courseRef, {
      reviews: arrayUnion(docRef.id),
    });

    return docRef.id;
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
   * Signs the current user out
   */
  async signOut() {
    signOut(this.auth);
  }
}

export default new Database(FirebaseConfig);
