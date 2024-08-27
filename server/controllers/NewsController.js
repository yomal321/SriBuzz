const News = require("../models/News"); // Assuming your model is located in the models directory

// Create a new news entry
const createNews = async (req, res) => {
  try {
    const { newsId, newsTitle, newsDescription, createdBy, tags } = req.body;

    const newNews = new News({
      newsId,
      newsTitle,
      newsDescription,
      createdAt: new Date().toISOString(), // Automatically set the creation time
      createdBy,
      tags,
    });

    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(500).json({ message: "Error creating news", error });
  }
};

// Get all news entries
const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error });
  }
};

// Get a specific news entry by ID
const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error });
  }
};

// Update a news entry
const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { newsTitle, newsDescription, createdBy, tags } = req.body;

    const updatedNews = await News.findByIdAndUpdate(
      id,
      { newsTitle, newsDescription, createdBy, tags },
      { new: true } // Return the updated document
    );

    if (!updatedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: "Error updating news", error });
  }
};

// Delete a news entry
const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting news", error });
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};
