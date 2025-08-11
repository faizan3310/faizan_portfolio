const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  experience: {
    type: Number,
    required: true,
    min: 0
  },
  skills: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Shortlisted', 'Rejected', 'Interested', 'Not Connected'],
    default: 'Not Connected'
  },
  notes: {
    type: String,
    trim: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  callsMade: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

candidateSchema.index({ name: 'text', email: 'text', skills: 'text', location: 'text' });

module.exports = mongoose.model('Candidate', candidateSchema);
