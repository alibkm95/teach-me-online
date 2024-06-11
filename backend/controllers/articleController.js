const Article = require('../models/Article')
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

  const regex = /<##>(.*?)<\/##>\n<###>(.*?)<\/###>/g
  const matches = Array.from(textContent.matchAll(regex))

  const paragraphs = matches.map((match) => ({
    title: match[1],
    paragraph: match[2].replace(/\n/g, '')
  }))

  if (!file) {
    throw new CustomError.BadRequestError('poster image must be provided!')
  }

  const uploadedImagePath = await articleImageUploader(file, req)

  try {
    const article = await Article.create({
      title,
      poster: uploadedImagePath,
      paragraphs,
      creator: req.user.userId,
      references: references ? references : []
    })

    res.status(StatusCodes.CREATED).json({ article })
  } catch (error) {
    throw new CustomError.BadRequestError('creating new article failed!')
  }
}

const getArticles = async (req, res) => {
  const { search, sort } = req.body

  let queryObj = {
    isPublished: true
  }

  if (search) {
    queryObj.title = { $regex: search, $options: 'i' }
  }

  let result = Article.find(queryObj)
    .populate({
      path: 'creator',
      select: 'name profile role'
    })

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

  const page = Number(req.query.page) || 1
  const limit = 12
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const articles = await result
  const totalArticles = await Article.countDocuments(queryObj)
  const numOfPages = Math.ceil(totalArticles / limit)

  res.status(StatusCodes.OK).json({ articles, totalArticles, numOfPages })
}

const getSingleArticle = async (req, res) => {
  const { id: articleId } = req.params

  const article = await Article.findOne({ _id: articleId })
    .populate({
      path: 'creator',
      select: 'name profie role'
    })

  if (!article) {
    throw new CustomError.NotFoundError('there is no such an article!')
  }

  res.status(StatusCodes.OK).json({ article })
}

const articleImageUploader = async (file, req) => {
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
    await posterImage.mv(posterPath);
  } catch (error) {
    throw new CustomError.BadRequestError('upload file error')
  }

  return `${req.protocol}://${req.get('host')}/assets/articles/${fileName}`
}

module.exports = {
  createArticle,
  getArticles,
  getSingleArticle
}