const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'course title must be provided!']
  },
  price: {
    type: Number,
    required: [true, 'course price must be provided']
  },
  description: {
    type: String,
    required: [true, 'course description must be provided']
  },
  courseStatus: {
    type: String,
    enum: {
      values: ['completed', 'recording'],
      message: '{VALUE} is not a valid status type'
    },
    default: 'recording'
  },
  requirements: {
    type: [String],
    default: []
  },
  score: {
    type: Number,
    default: 5
  },
  instructor: {
    type: mongoose.Types.ObjectId,
    ref: 'Instructor',
    required: [true, 'the instructor of the course must be provided!']
  },
  categories: {
    type: [String],
    default: []
  },
  lang: {
    type: [String],
    default: []
  },
  tags: {
    type: [String],
    default: []
  },
  cover: {
    type: String,
    required: [true, 'the cover of the course must be provided']
  },
  intro: {
    type: String,
    default: ''
  },
  isPublish: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Course', CourseSchema)
