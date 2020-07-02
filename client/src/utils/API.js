import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function (query) {
    return axios.get(BASEURL + query);
  },
};
