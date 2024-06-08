const mongoose = require('mongoose')

const TicketConversationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ticket: {
    type: mongoose.Types.ObjectId,
    ref: 'Ticket',
    required: true
  },
  message: {
    type: String,
    maxlength: 2000,
    required: [true, 'message for ticket is required']
  },
  attachment: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('TicketConversation', TicketConversationSchema)