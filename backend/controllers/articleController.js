const Article = require('../models/Article')
const Instructor = require('../models/Instructor')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const fs = require('fs')
const path = require('path')

const createArticle = async (req, res) => {
  const { title, content, references } = req.body
  const file = req.files ? req.files.poster : null

  if (!title) {
    throw new CustomError.BadRequestError('article title is required!')
  }

  if (!content) {
    throw new CustomError.BadRequestError('article content must be provided!')
  }

  const regex = /<##>(.*?)<\/##><###>(.*?)<\/###>/g
  const matches = Array.from(content.matchAll(regex))

  const paragraphs = matches.map((match) => ({
    title: match[1],
    text: match[2]
  }))

  if (!file) {
    throw new CustomError.BadRequestError('poster image must be provided!')
  }

  const instructor = await Instructor.findOne({ user: req.user.userId })

  if (!instructor) {
    throw new CustomError.BadRequestError('there is no instructor to assign as article writer!')
  }

  const uploadedFileName = await articleImageUploader(file)

  try {
    const article = await Article.create({
      title,
      poster: uploadedFileName,
      paragraphs,
      creator: instructor._id,
      references: references ? references : []
    })

    res.status(StatusCodes.CREATED).json({ article })
  } catch (error) {
    throw new CustomError.BadRequestError('creating new article failed!')
  }
}

const getArticles = async (req, res) => {
  const { search, sort } = req.query

  let queryObj = {
    isPublished: true
  }

  if (search) {
    queryObj.title = { $regex: search, $options: 'i' }
  }

  let result = Article.find(queryObj)

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    AZ: 'title',
    ZA: '-title',
  }

  if (sort && sortOptions[sort]) {
    result = result.sort(sortOptions[sort])
  } else {
    result = result.sort('-createdAt')
  }

  const articles = await result

  res.status(StatusCodes.OK).json({ articles })
}

const getSingleArticle = async (req, res) => {
  const { id: articleId } = req.params

  const article = await Article.findOne({ _id: articleId })
    .populate({
      path: 'creator',
      populate: {
        path: 'user',
        select: 'name profile role'
      }
    })

  if (!article) {
    throw new CustomError.NotFoundError('there is no such an article!')
  }

  res.status(StatusCodes.OK).json({ article })
}

const articleImageUploader = async (file) => {
  if (!file) return ''

  const posterDirectory = path.join(__dirname, '../public/assets/articles');

  if (!fs.existsSync(posterDirectory)) {
    fs.mkdirSync(posterDirectory)
  }

  const posterImage = file

  if (!posterImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('only image files allowed(*.png  *.jpg)');
  }

  const maxSize = 1024 * 1024 * 5;

  if (posterImage.size > maxSize) {
    throw new CustomError.BadRequestError('selected file size must be less than 5MB');
  }

  posterImage.name = posterImage.name.replaceAll(' ', '_');

  const fileName = `${new Date().getTime()}_${posterImage.name}`;

  const posterPath = path.join(__dirname, `../public/assets/articles/${fileName}`);

  try {
    await posterImage.mv(posterPath)
    return fileName
  } catch (error) {
    throw new CustomError.BadRequestError('upload file error')
  }
}

module.exports = {
  createArticle,
  getArticles,
  getSingleArticle
}