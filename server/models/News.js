const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const NewsSchema = new Schema({
  newsId: { type: String, required: true },
  newsTitle: { type: String, required: true },
  newsDescription: { type: String, required: true },
  createdAt: { type: [String] },
  createdBy: { type: String },
  tags: { type: [String] },
});

module.exports = model("News", NewsSchema);
