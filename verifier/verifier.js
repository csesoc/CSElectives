/**
 * Class responsible for authenticating a user
 */
class Verifier {
  /**
   * Initiates the verifier with the url
   * @param {string} url
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * Verifies the username and password match
   * and returns the display name if they match
   * @param {string} username
   * @param {string} password
   */
  verify(username, password) {
    // fetch()
  }
}

export default new Verifier('https://verify.csesoc.unsw.edu.au/v1');
