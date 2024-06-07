const mongoose = require('mongoose')

const EpisodeSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  season: {
    type: mongoose.Types.ObjectId,
    ref: 'Season',
    required: true
  },
  title: {
    type: String,
    required: [true, 'the episode title is required!']
  },
  duration: {
    type: Number,
    default: 0
  },
  video: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Episode', EpisodeSchema)