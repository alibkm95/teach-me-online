const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
  createor: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: [true, 'ticket subject must be provided!']
  },
  ticketStatus: {
    type: String,
    enum: {
      values: ['pending', 'answered', 'closed'],
      message: '{VALUE} is not supported as a valid status'
    },
    default: 'pending'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

TicketSchema.virtual('conversation', {
  ref: 'TicketConversation',
  localField: '_id',
  foreignField: 'ticket',
  justOne: false
})

TicketSchema.pre('remove', async function () {
  await this.model('TicketConversation').deleteMany({ ticket: this._id })
})

module.exports = mongoose.model('Ticket', TicketSchema)