const Question = require('../models/Question')
const QuestionConversation = require('../models/QuestionConversation')
const Episode = require('../models/Episode')
const fs = require('fs')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const makeQuestion = async (req, res) => {
  const { episodeId, message } = req.body
  const file = req.files ? req.files.attachment : null

  let uploadedFilePath = ''

  if (!episodeId || !message) {
    throw new CustomError.BadRequestError('required fields is not provided!')
  }

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
    throw new CustomError.NotFoundError('there is no such an episode!')
  }

  if (file) {
    uploadedFilePath = await questionFileUploader(file, req)
  }

  const existingQuestion = await Question.findOne({
    student: req.user.userId,
    episode: episodeId
  })

  if (!existingQuestion) {
    const newQuestion = await Question.create({
      student: req.user.userId,
      episode: episode._id,
      courseTitle: episode.course.title,
      seasonTitle: episode.season.title
    })

    if (!newQuestion) {
      throw new CustomError.BadRequestError('creating new question failed!')
    }

    const msg = await QuestionConversation.create({
      sender: req.user.userId,
      question: newQuestion._id,
      message,
      attachment: uploadedFilePath
    })

    if (!msg) {
      await newQuestion.deleteOne()
      throw new CustomError.BadRequestError('creating new question failed!')
    }

    const createdQuestion = await Question.findOne({ _id: newQuestion._id })
      .populate({
        path: 'conversation',
        populate: {
          path: 'sender',
          model: 'User',
          select: 'name email profile role'
        }
      })

    return res.status(StatusCodes.CREATED).json({ question: createdQuestion })
  }

  const newMsg = await QuestionConversation.create({
    sender: req.user.userId,
    question: existingQuestion._id,
    message,
    attachment: uploadedFilePath
  })

  if (!newMsg) {
    throw new CustomError.BadRequestError('adding new message to question failed')
  }

  existingQuestion.questionStatus = 'pending'
  await existingQuestion.save()

  const updatedQuestion = await Question.findOne({ _id: existingQuestion._id })
    .populate({
      path: 'conversation',
      populate: {
        path: 'sender',
        model: 'User',
        select: 'name email profile role'
      }
    })

  res.status(StatusCodes.CREATED).json({ question: updatedQuestion })
}

const addAnswer = async (req, res) => {
  const { id: questionId } = req.params
  const { answer } = req.body
  const file = req.files ? req.files.attachment : null

  let uploadedFilePath = ''

  if (!answer) {
    throw new CustomError.BadRequestError('answer to this question is required!')
  }

  const question = await Question.findOne({ _id: questionId })

  if (!question) {
    throw new CustomError.NotFoundError('there is no such a question!')
  }

  if (file) {
    uploadedFilePath = await questionFileUploader(file, req)
  }

  const newMessage = await QuestionConversation.create({
    sender: req.user.userId,
    question: question._id,
    message: answer,
    attachment: uploadedFilePath
  })

  if (!newMessage) {
    throw new CustomError.BadRequestError('adding answer failed!')
  }

  question.questionStatus = 'answered'
  await question.save()

  const updatedQuestion = await Question.findOne({ _id: question._id })
    .populate({
      path: 'conversation',
      populate: {
        path: 'sender',
        model: 'User',
        select: 'name email profile role'
      }
    })

  res.status(StatusCodes.OK).json({ updatedQuestion })

}

const getUserQuestions = async (req, res) => {
  const questions = await Question.find({ student: req.user.userId })
    .populate({
      path: 'episode',
      select: 'title'
    })

  if (!questions) {
    throw new CustomError.NotFoundError('there is no questions')
  }

  res.status(StatusCodes.OK).json({ questions })
}

const getEpisodeQuestions = async (req, res) => {
  const { id: episodeId } = req.params

  const question = await Question.findOne({ student: req.user.userId, episode: episodeId })
    .populate({
      path: 'conversation',
      populate: {
        path: 'sender',
        model: 'User',
        select: 'name email profile role'
      }
    })

  if (!question) {
    throw new CustomError.NotFoundError('there is no such a question!')
  }

  res.status(StatusCodes.OK).json({ question })
}

const getSingleQuestion = async (req, res) => {
  const { id: questionId } = req.params

  const question = await Question.findOne({ _id: questionId, student: req.user.userId })
    .populate({
      path: 'conversation',
      populate: {
        path: 'sender',
        model: 'User',
        select: 'name email profile role'
      }
    })

  if (!question) {
    throw new CustomError.NotFoundError('there is no such a question!')
  }

  res.status(StatusCodes.OK).json({ question })
}

const questionFileUploader = async (file, req) => {
  if (!file) return ''

  const attachmentsDirectory = path.join(__dirname, '../public/uploads/attachments');

  if (!fs.existsSync(attachmentsDirectory)) {
    fs.mkdirSync(attachmentsDirectory)
  }

  const attachment = file

  if (!attachment.mimetype.startsWith('application/zip') && !attachment.mimetype.startsWith('application/x-zip-compressed')) {
    throw new CustomError.BadRequestError('only *.ZIP files allowed!');
  }

  const maxSize = 1024 * 1024 * 10;

  if (attachment.size > maxSize) {
    throw new CustomError.BadRequestError('selected file size must be less than 10MB');
  }

  attachment.name = attachment.name.replaceAll(' ', '_');

  const fileName = `${new Date().getTime()}_${attachment.name}`;

  const attachmentPath = path.join(__dirname, `../public/uploads/attachments/${fileName}`);

  try {
    await attachment.mv(attachmentPath);
  } catch (error) {
    throw new CustomError.BadRequestError('upload file error')
  }

  return `${req.protocol}://${req.get('host')}/uploads/attachments/${fileName}`
}

module.exports = {
  makeQuestion,
  addAnswer,
  getUserQuestions,
  getSingleQuestion,
  getEpisodeQuestions
}