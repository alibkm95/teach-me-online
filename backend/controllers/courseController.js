const Course = require('../models/Course')
const Instructor = require('../models/Instructor')
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

const getAllCourses = async (req, res) => {
  res.send('getAllCourses')
}

const getSingleCourse = async (req, res) => {
  res.send('getSingleCourse')
}

const updateCourse = async (req, res) => {
  res.send('updateCourse')
}

const deleteCourse = async (req, res) => {
  res.send('deleteCourse')
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

module.exports = {
  createNewCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse
}