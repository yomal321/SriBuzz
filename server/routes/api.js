const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

// News routes
router.post("/news", NewsController.createNews);
router.get("/news", NewsController.getAllNews);
router.get("/news/:id", NewsController.getNewsById);
router.put("/news/:id", NewsController.updateNews);
router.delete("/news/:id", NewsController.deleteNews);

// Category Routes

module.exports = router;
