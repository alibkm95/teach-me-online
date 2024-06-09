const Ticket = require('../models/Ticket')
const TicketConversation = require('../models/TicketConversation')
const User = require('../models/User')
const fs = require('fs')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createTicket = async (req, res) => {
  const { subject, message } = req.body
  const file = req.files ? req.files.attachment : null

  let uploadedFilePath = ''

  if (!subject || !message) {
    throw new CustomError.BadRequestError('required fields are not provided!')
  }

  const ticket = await Ticket.create({
    subject,
    creator: req.user.userId
  })

  if (!ticket) {
    throw new CustomError.BadRequestError('creating new ticket failed!')
  }

  if (file) {
    uploadedFilePath = await ticketFileUploader(file, req)
  }

  const newMessage = await TicketConversation.create({
    sender: req.user.userId,
    ticket: ticket._id,
    message,
    attachment: uploadedFilePath
  })

  if (!newMessage) {
    await ticket.deleteOne()
    throw new CustomError.BadRequestError('creating new ticket failed!')
  }

  res.status(StatusCodes.CREATED).json({ msg: 'ticket created successfully' })
}

const getUserTickets = async (req, res) => {
  const tickets = await Ticket.find({ creator: req.user.userId })

  if (!tickets) {
    throw new CustomError.NotFoundError('there is no tickets!')
  }

  res.status(StatusCodes.OK).json({ tickets, count: tickets.length })
}

const getSingleTicket = async (req, res) => {
  const { id: ticketId } = req.params

  const ticket = await Ticket.findOne({ _id: ticketId })
    .populate({
      path: 'creator',
      select: 'name email profile role'
    })
    .populate({
      path: 'conversation',
      populate: {
        path: 'sender',
        model: 'User',
        select: 'name email profile role'
      }
    })

  if (!ticket) {
    throw new CustomError.NotFoundError('there is no such a ticket!')
  }

  if (req.user.role === 'USER' && req.user.userId !== ticket.creator._id.toString()) {
    throw new CustomError.UnauthorizedError('you cant access to the tickets other than yours!')
  }

  res.status(StatusCodes.OK).json({ ticket })
}

const addNewMessage = async (req, res) => {
  const { id: ticketId } = req.params
  const { newMessage } = req.body

  let ticket = await Ticket.findOne({ _id: ticketId })
    .populate({
      path: 'creator',
      select: 'name role'
    })

  if (!ticket) {
    throw new CustomError.NotFoundError('there is no such a ticket!')
  }

  if (ticket.ticketStatus === 'closed') {
    throw new CustomError.BadRequestError('error! this ticket is closed and can not send any message to it.')
  }

  if (req.user.role === 'USER' && req.user.userId !== ticket.creator._id.toString()) {
    throw new CustomError.UnauthorizedError('you cant access to the tickets other than yours!')
  }

  const newMessageInserting = await TicketConversation.create({
    sender: req.user.userId,
    ticket: ticketId,
    message: newMessage
  })

  if (!newMessageInserting) {
    throw new CustomError.BadRequestError('unable to send new message!')
  }

  if (req.user.role === 'ROOTADMIN') {
    ticket.ticketStatus = 'answered'
    await ticket.save()
  }

  if (req.user.role === 'USER' || req.user.role === 'INSTRUCTOR') {
    ticket.ticketStatus = 'pending'
    await ticket.save()
  }

  ticket = await Ticket.findOne({ _id: ticketId })
    .populate({
      path: 'creator',
      select: 'name email profile role'
    })
    .populate({
      path: 'conversation',
      populate: {
        path: 'sender',
        model: 'User',
        select: 'name email profile role'
      }
    })

  res.status(StatusCodes.OK).json({ ticket })
}

const closeTicket = async (req, res) => {
  const { id: ticketId } = req.params

  const ticket = await Ticket.findOne({ _id: ticketId })

  if (!ticket) {
    throw new CustomError.NotFoundError('there is no such a ticket!')
  }

  ticket.ticketStatus = 'closed'
  await ticket.save()

  res.status(StatusCodes.OK).json({ msg: 'ticketClosed successfully' })
}

const deleteTicket = async (req, res) => {
  const { id: ticketId } = req.params

  const ticket = await Ticket.findOne({ _id: ticketId })

  if (!ticket) {
    throw new CustomError.NotFoundError('there is no such a ticket!')
  }

  await ticket.deleteOne()

  res.status(StatusCodes.OK).json({ msg: 'ticket deleted successfully' })
}

const ticketFileUploader = async (file, req) => {
  if (!file) return ''

  const attachmentsDirectory = path.join(__dirname, '../public/uploads/attachments');

  if (!fs.existsSync(attachmentsDirectory)) {
    fs.mkdirSync(attachmentsDirectory)
  }

  const attachment = file

  if (!attachment.mimetype.startsWith('application/x-rar') && !attachment.mimetype.startsWith('application/zip')) {
    throw new CustomError.BadRequestError('only *.ZIP or *.RAR files allowed!');
  }

  const maxSize = 1024 * 1024 * 10;

  if (attachment.size > maxSize) {
    throw new CustomError.BadRequestError('selected file size must be less than 10MB');
  }

  attachment.name = attachment.name.replaceAll(' ', '_');

  const fileName = `${new Date().getTime()}_${attachment.name}`;

  const imagePath = path.join(__dirname, `../public/uploads/attachments/${fileName}`);

  try {
    await attachment.mv(imagePath);
  } catch (error) {
    throw new CustomError.BadRequestError('upload file error')
  }

  return `${req.protocol}://${req.get('host')}/uploads/attachments/${fileName}`
}

module.exports = {
  createTicket,
  getUserTickets,
  getSingleTicket,
  addNewMessage,
  closeTicket,
  deleteTicket,
}