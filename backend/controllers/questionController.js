const Question = require('../models/Question')
const QuestionConversation = require('../models/QuestionConversation')
const fs = require('fs')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const makeQuestion = async (req, res) => {
  res.send("makeQuestion")
}

const addAnswer = async (req, res) => {
  res.send("addAnswer")
}

const getUserQuestions = async (req, res) => {
  res.send("getUserQuestions")
}

const getSingleQuestion = async (req, res) => {
  res.send("getSingleQuestion")
}

const questionFileUploader = async (req, res) => {

}

module.exports = {
  makeQuestion,
  addAnswer,
  getUserQuestions,
  getSingleQuestion,
}