import React from 'react'

import { FaTicketAlt } from "react-icons/fa";

const TicketInfos = ({ ticket }) => {

  const statusOpt = {
    answered: ['answered', 'text-whiet bg-success'],
    pending: ['pending', 'text-black bg-warning'],
    closed: ['closed', 'text-white bg-error']
  }

  return (
    <div className='bg-base-200 p-4 rounded-box flex flex-col gap-4'>
      <p className="flex items-center gap-2 pb-2 ps-4 border-b border-b-gray-700 text-2xl font-bold">
        <FaTicketAlt className='text-green-600' />
        Ticket infos
      </p>
      <ul className="flex flex-col gap-2 ps-2">
        <li className="text-2xl">
          Subject:
        </li>
        <li>
          {ticket.subject}
        </li>
        <li className="text-2xl">
          Status:
        </li>
        <li>
          <span
            className={`block m-1 p-2 text-sm w-max rounded-full ${statusOpt[ticket.ticketStatus][1]}`}
          >
            {statusOpt[ticket.ticketStatus][0]}
          </span>
        </li>
        <li className="text-2xl">
          Create at:
        </li>
        <li>
          {new Date(ticket.createdAt).toLocaleDateString()}
        </li>
      </ul>
    </div>
  )
}

export default TicketInfos