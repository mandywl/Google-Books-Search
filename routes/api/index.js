const router = require("express").Router();
const bookRoutes = require("./favouriteBooks");

// Post routes
router.use("/books", bookRoutes);

module.exports = router;
