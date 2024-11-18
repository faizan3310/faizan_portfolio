const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  images: { type: [String] },
});

module.exports = mongoose.model('Car', carSchema);
