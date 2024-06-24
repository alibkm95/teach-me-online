const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'article title is required']
  },
  poster: {
    type: String,
    required: [true, 'each article must have a poster image!']
  },
  paragraphs: [{
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }],
  references: {
    type: [String],
    default: []
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'Instructor',
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', ArticleSchema)