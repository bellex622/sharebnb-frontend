import axios from "axios";

const BASE_URL = "http://localhost:5001";

class sharebnbApi {

  /** Get details on all listings.
    *
    *  Returns a list of listings
    *
    * { listings:
    * [ { id, username, description, price, photo_url, is_reserved }, ...] }
   */

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    // const headers = { "Access-Control-Allow-Origin": "* " };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Get all listings. */
  static async getListings() {
    let res = await this.request("listings");
    return res.listings;
  }

  /** Get detail of a listing. */
  static async getListingDetail(id) {
    let res = await this.request(`listings/${id}`);
    return res.listing;
  }

  /** Create a new listing. */
  static async createNewListing(data) {
    let res = await this.request("listings", data, "post");
    return res.listing;
  }

}


export default sharebnbApi;