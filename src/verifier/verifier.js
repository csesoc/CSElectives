/**
 * Class responsible for verifying a user
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
   * @async
   * @param {string} zid
   * @param {string} zpass
   * @param {number} retries
   * @return {Promise<object>} displayName
   */
  async getUser(zid, zpass, retries = 5) {
    const payload = { zid, zpass };
    const response = await this._post(payload);
    if (response.status == 503 && retries > 0) {
      this.getUser(zid, zpass, retries - 1);
    }

    return {
      status: response.status,
      data: await response.json(),
    };
  }

  /**
   *
   * @param {object} payload
   * @return {Promise<Response>} response
   */
  async _post(payload) {
    return await fetch(this.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  }
}

export default new Verifier('https://verify.csesoc.unsw.edu.au/v1');
