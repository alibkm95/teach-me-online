const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  episode: {
    type: mongoose.Types.ObjectId,
    ref: 'Episode',
    required: true
  },
  courseTitle: {
    type: String,
    default: ''
  },
  seasonTitle: {
    type: String,
    default: ''
  },
  questionStatus: {
    tyep: String,
    enum: {
      values: ['pending', 'answered'],
      message: '{VALUE} is not supported as a valid status'
    },
    default: 'pending'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

QuestionSchema.virtual('conversation', {
  ref: 'QuestionConversation',
  localField: '_id',
  foreignField: 'question',
  justOne: false
})

module.exports = mongoose.model('Question', QuestionSchema)