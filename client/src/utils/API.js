import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function (query) {
    return axios.get(BASEURL + query);
  },

  // Gets all books
  getFavouriteBooks: function () {
    return axios.get("api/books");
  },
  // Gets the book with the given id
  getFavouriteBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the post with the given id
  deleteFavouriteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a post to the database
  saveFavouriteBook: function (postData) {
    return axios.post("/api/books", postData);
  },
};
