const mongoose = require('mongoose')

const QuestionConversationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  question: {
    type: mongoose.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  message: {
    type: String,
    maxlength: 2000,
    required: [true, 'message for question is required!']
  },
  attachment: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('QuestionConversation', QuestionConversationSchema)