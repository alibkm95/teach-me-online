const mongoose = require('mongoose')

const UserCoursesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('UserCourses', UserCoursesSchema)