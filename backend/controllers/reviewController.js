
const Review = require('../models/Review')
const Course = require('../models/Course')
const UserCourse = require('../models/UserCourse')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const addReview = async (req, res) => {
  const { id: courseId } = req.params
  const { rating, comment } = req.body

  if (!rating || !comment) {
    throw new CustomError.BadRequestError('required review information must be provided!')
  }

  const course = await Course.findOne({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError('there is no course with provided information')
  }

  const isUserSubscribed = await UserCourse.findOne({
    user: req.user.userId,
    course: course._id
  })

  if (!isUserSubscribed && req.user.role === 'USER') {
    throw new CustomError.BadRequestError('you are not subscribed to this course')
  }

  const isAlreadySubmited = await Review.findOne({
    user: req.user.userId,
    course: course._id
  })

  if (isAlreadySubmited && req.user.role === 'USER') {
    throw new CustomError.BadRequestError('you already submited a review to this course!')
  }

  const review = await Review.create({
    course: course._id,
    user: req.user.userId,
    rating,
    comment
  })

  if (req.user.role === 'USER') {
    course.score = Math.ceil((course.score + rating) / 2)
    await course.save()
  }

  res.status(StatusCodes.CREATED).json({ review })

}

const getCourseReviews = async (req, res) => {
  const { id: courseId } = req.params

  const reviews = await Review.find({ course: courseId, isPublish: true })
    .populate({
      path: 'user',
      select: 'name role profile'
    })

  res.status(StatusCodes.OK).json({ reviews })
}

const updateReview = async (req, res) => {
  const { id: courseId } = req.params
  const { comment } = req.body

  if (!comment) {
    throw new CustomError.BadRequestError('necessary informations must be provided!')
  }

  const review = await Review.findOne({ user: req.user.userId, course: courseId })

  if (!review) {
    throw new CustomError.NotFoundError('there is no review with provided informations')
  }

  review.comment = comment
  review.save()

  res.status(StatusCodes.OK).json({ review })
}

const deleteReview = async (req, res) => {
  const { id: reviewId } = req.params

  try {
    await Review.findOneAndDelete({ _id: reviewId })
    res.status(StatusCodes.OK).json({ msg: 'review remover successfully!' })
  } catch (error) {
    throw error
  }
}


module.exports = {
  addReview,
  getCourseReviews,
  updateReview,
  deleteReview
}