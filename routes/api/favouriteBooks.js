const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/posts"
router.route("/").post(booksController.create);

router.route("/").get(booksController.findAll);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
