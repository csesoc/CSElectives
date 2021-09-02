import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore, collection } from 'firebase/firestore/lite';

import FirebaseConfig from '../assets/firebase-config.json';

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
   * Appends a new review to the course's reviews
   * NOTE: This function does not change the global state for you
   *
   * @param {string} courseCode
   * @param {object} review
   */
  async addReview(courseCode, review) {
    console.log(`Added review to ${courseCode}`);

    // TODO ELEC-94: implement this function
    // await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
  }
}

export default new Database(FirebaseConfig);
