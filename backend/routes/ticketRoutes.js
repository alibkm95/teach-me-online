const express = require('express')
const router = express.Router()

const {
  createTicket,
  getUserTickets,
  getSingleTicket,
  addNewMessage,
  closeTicket,
  deleteTicket,
} = require('../controllers/ticketController')

const {
  authenticateUser,
  authorizePermissions
} = require('../middlewares/authentication')

router
  .route('/')
  .post(authenticateUser, createTicket)
  .get(authenticateUser, getUserTickets)

router
  .route('/addNewMsg/:id')
  .patch(authenticateUser, addNewMessage)

router
  .route('/:id')
  .get(authenticateUser, getSingleTicket)
  .patch(authenticateUser, authorizePermissions('ROOTADMIN'), closeTicket)
  .delete(authenticateUser, authorizePermissions('ROOTADMIN'), deleteTicket)

module.exports = router