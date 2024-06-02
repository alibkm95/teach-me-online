const mongoose = require('mongoose')

const InstructorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: {
    type: [String],
    default: []
  },
  position: {
    type: String,
    required: [true, 'instrictor\'s position must be provided!']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Instructor', InstructorSchema)