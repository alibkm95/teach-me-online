const mongoose = require('mongoose')

const SeasonSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: [true, 'the title of season is required!']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

SeasonSchema.virtual('Episodes', {
  ref: 'Episode',
  localField: '_id',
  foreignField: 'season',
  justOne: false
})

module.exports = mongoose.model('Season', SeasonSchema)