import React from 'react'
import { Link } from 'react-router-dom'

const TicketBox = ({ ticket }) => {

  const statusOpt = {
    answered: ['answered', 'text-whiet bg-success'],
    pending: ['pending', 'text-black bg-warning'],
    closed: ['closed', 'text-white bg-error']
  }

  return (
    <div className='bg-base-300 p-4 w-full max-w-96 rounded-box shadow-xl flex items-center gap-2'>
      <ul>
        <li>
          <span className="block text-success">Subject: </span>
          <span className='ps-2'>{ticket.subject}</span>
        </li>
        <li>
          <span className="block text-success">Created At: </span>
          <span className='ps-2'>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </li>
        <li>
          <span className="block text-success">Status: </span>
          <span
            className={`block m-1 p-2 text-sm w-max rounded-full ${statusOpt[ticket.ticketStatus][1]}`}
          >
            {statusOpt[ticket.ticketStatus][0]}
          </span>
        </li>
        <li>
          <Link to={`/ticketDetailes/${ticket._id}`} className='btn btn-neutral text-white btn-sm mt-2 ms-auto'>
            Detailes
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TicketBox