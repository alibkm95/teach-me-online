const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  rating: {
    type: Number,
    max: 5,
    min: 1,
    required: [true, 'rating is required to submit a review']
  },
  comment: {
    type: String,
    required: [true, 'to submit a review, the comment text is required']
  },
  isPublish: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Review', ReviewSchema)