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
   * @param {string} zid
   * @param {string} zpass
   * @return {Response} response
   */
  async verify(zid, zpass) {
    const payload = { zid, zpass };
    const response = await this._post(payload);
    return response;
  }

  /**
   *
   * @param {object} payload
   * @return {Promise<Response>} response
   */
  _post(payload) {
    return fetch(this.url, {
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
