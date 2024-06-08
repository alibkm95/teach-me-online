const Ticket = require('../models/Ticket')
const TicketConversation = require('../models/TicketConversation')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createTicket = async (req, res) => {
  res.send('createTicket')
}

const getUserTickets = async (req, res) => {
  res.send('getUserTickets')
}

const getSingleTicket = async (req, res) => {
  res.send('getSingleTicket')
}

const addNewMessage = async (req, res) => {
  res.send('addNewMessage')
}

const closeTicket = async (req, res) => {
  res.send('closeTicket')
}

const deleteTicket = async (req, res) => {
  res.send('deleteTicket')
}

module.exports = {
  createTicket,
  getUserTickets,
  getSingleTicket,
  addNewMessage,
  closeTicket,
  deleteTicket,
}