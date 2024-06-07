const Course = require('../models/Course')
const Instructor = require('../models/Instructor')
const Season = require('../models/Season')
const Episode = require('../models/Episode')
const UserCourse = require('../models/UserCourse')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const fs = require('fs')
const path = require('path')

const createNewCourse = async (req, res) => {

  const coverImage = req.files ? req.files.coverImage : null
  const { title, price, description, categories, lang, tags, requirements } = req.body

  if (!title, !price, !description) {
    throw new CustomError.BadRequestError('required fields must be provided!')
  }

  if (!coverImage) {
    throw new CustomError.BadRequestError('cover image for the course is required!')
  }

  const instructor = await Instructor.findOne({ user: req.user.userId })

  if (!instructor) {
    throw new CustomError.BadRequestError('the applier user is not an instructor')
  }

  let queryObj = {
    title,
    price,
    description
  }

  const coverImageLink = await uploadCourseCover(coverImage, req)

  queryObj.cover = coverImageLink
  queryObj.instructor = instructor._id
  queryObj.requirements = requirements && requirements.length ? requirements : []
  queryObj.categories = categories && categories.length ? categories : []
  queryObj.lang = lang && lang.length ? lang : []
  queryObj.tags = tags && tags.length ? tags : []

  try {
    const course = await Course.create(queryObj)
    res.status(StatusCodes.CREATED).json({ course })
  } catch (error) {
    throw new CustomError.BadRequestError('adding new Course Error!')
  }
}

const addSeason = async (req, res) => {

  const { id: courseId } = req.params
  const { title } = req.body

  if (!title) {
    throw new CustomError.BadRequestError('season title must be provided!')
  }

  const course = await Course.findOne({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError('no course founded with provided info!')
  }

  const season = await Season.create({
    course: courseId,
    title
  })

  res.status(StatusCodes.CREATED).json({ season })
}

const addEpisode = async (req, res) => {
  const { courseId, seasonId } = req.params
  const { title } = req.body

  if (!title) {
    throw new CustomError.BadRequestError('episode title must be provided!')
  }

  const course = await Course.findOne({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError('there is no course with provided information!')
  }

  const season = await Season.findOne({ _id: seasonId })

  if (!season) {
    throw new CustomError.NotFoundError('there is no season with provided information!')
  }

  const minTime = 5 * 60 * 1000
  const maxTime = 30 * 60 * 1000
  const randomDuration = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime

  const episode = await Episode.create({
    course: course._id,
    season: season._id,
    title,
    duration: randomDuration
  })

  res.status(StatusCodes.CREATED).json({ episode })
}

const subscribeUserToCourse = async (req, res) => {
  const { id: courseId } = req.params

  const course = await Course.findOne({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError('there is no course with provided informations!')
  }

  const isAlreadySubscribed = await UserCourse.findOne({ course: course._id })

  if (isAlreadySubscribed) {
    throw new CustomError.BadRequestError('you already subscribed to this course')
  }

  const userCourse = await UserCourse.create({
    user: req.user.userId,
    course: course._id
  })

  res.status(StatusCodes.CREATED).json({ course })
}

const getAllCourses = async (req, res) => {
  const {
    category,
    lang,
    sort,
    search
  } = req.body

  let queryObj = {
    isPublish: true
  }

  if (category && category !== 'all') {
    queryObj.categories = { $in: [category.toLowerCase()] }
  }

  if (lang && lang !== 'all') {
    queryObj.lang = { $in: [lang.toLowerCase()] }
  }

  if (search) {
    queryObj.tags = { $in: search.toLowerCase().split(" ") }
  }

  let result = Course.find(queryObj)
    .populate({
      path: 'instructor',
      populate: {
        path: 'user',
        select: 'name profile role'
      }
    })

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    popular: 'score',
    AZ: 'title',
    ZA: '-title',
  }

  if (sort && sortOptions[sort]) {
    result = result.sort(sortOptions[sort])
  } else {
    result = result.sort('-createdAt')
  }

  const page = Number(req.query.page) || 1
  const limit = 12
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const courses = await result
  const totalCourses = await Course.countDocuments(queryObj)
  const numOfPages = Math.ceil(totalCourses / limit)

  res.status(StatusCodes.OK).json({ courses, totalCourses, numOfPages })
}

const getSingleCourse = async (req, res) => {
  const { id: courseId } = req.params

  const course = await Course.findOne({ _id: courseId })
    .populate({
      path: 'instructor',
      populate: {
        path: 'user',
        select: 'name profile role'
      }
    })

  if (!course) {
    throw new CustomError.NotFoundError('can not find any course with provided information')
  }

  res.status(StatusCodes.OK).json({ course })
}

const getSingleCourseContents = async (req, res) => {
  const { id: courseId } = req.params

  const course = await Course.findOne({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError('there is no course with provided informations!')
  }

  const content = await Season.find({ course: course._id })
    .populate({
      path: 'Episodes'
    })

  res.status(StatusCodes.OK).json({ content })
}

const getSingleEpisode = async (req, res) => {
  const { id: episodeId } = req.params

  const episode = await Episode.findOne({ _id: episodeId })
    .populate({
      path: 'course',
      select: 'title cover'
    })
    .populate({
      path: 'season',
      select: 'title'
    })

  if (!episode) {
    throw new CustomError.NotFoundError('there is no episode with provided information')
  }

  res.status(StatusCodes.OK).json(episode)
}

const updateCourse = async (req, res) => {
  const { id: courseId } = req.params

  const course = await Course.findOneAndUpdate(
    { _id: courseId },
    req.body,
    { new: true, runValidators: true }
  )

  if (!course) {
    throw new CustomError.NotFoundError('there is no such a course')
  }

  res.status(StatusCodes.OK).json({ course })
}

const deleteCourse = async (req, res) => {
  const { id: courseId } = req.params

  const course = await Course.findOne({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError('there is no such an course with provided informations')
  }

  const coverImage = course.cover
  const coverImagePath = path.parse(coverImage)

  if (coverImage.length && fs.existsSync(path.join(__dirname, `../public/assets/courses/${coverImagePath.base}`))) {
    fs.unlinkSync(path.join(__dirname, `../public/assets/courses/${coverImagePath.base}`), err => {
      if (err) console.log(err)
    })
  }

  await course.deleteOne()

  res.status(StatusCodes.OK).json({ msg: 'course removed successfully!' })

}

const uploadCourseCover = async (file, req) => {

  if (!file) return ''

  const coverDirectory = path.join(__dirname, '../public/assets/courses');

  if (!fs.existsSync(coverDirectory)) {
    fs.mkdirSync(coverDirectory)
  }

  const coverImage = file

  if (!coverImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('only image files allowed(*.png  *.jpg)');
  }

  const maxSize = 1024 * 1024 * 5;

  if (coverImage.size > maxSize) {
    throw new CustomError.BadRequestError('selected file size must be less than 5MB');
  }

  coverImage.name = coverImage.name.replaceAll(' ', '_');

  const fileName = `${new Date().getTime()}_${coverImage.name}`;

  const imagePath = path.join(__dirname, `../public/assets/courses/${fileName}`);

  try {
    await coverImage.mv(imagePath);
  } catch (error) {
    throw new CustomError.BadRequestError('upload file error')
  }

  return `${req.protocol}://${req.get('host')}/assets/courses/${fileName}`
}

// TODO => check for user access to course data

module.exports = {
  createNewCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  addSeason,
  addEpisode,
  getSingleCourseContents,
  getSingleEpisode,
  subscribeUserToCourse
}