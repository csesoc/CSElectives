import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore, collection, addDoc } from 'firebase/firestore/lite';

import FirebaseConfig from '../assets/firebase-config.json';

// NOTE: Courses and reviews have been separated to support an easier transition
// for lazy loading in the future

/**
 * Class responsible for reading and writing to Firestore database.
 */
class Database {
  /**
   * Initialise connection to Firestore database.
   * @param {object} firebaseConfig
   */
  constructor(firebaseConfig) {
    this.db = getFirestore(initializeApp(firebaseConfig));
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
    const docRef = await addDoc(collection(this.db, 'reviews'), review);
    return docRef.id;
  }
}

export default new Database(FirebaseConfig);
