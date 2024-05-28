import React from 'react'

import { FaTicketAlt } from "react-icons/fa";

const TicketInfos = () => {
  return (
    <div className='bg-base-200 p-4 rounded-box flex flex-col gap-4'>
      <p className="flex items-center gap-2 pb-2 ps-4 border-b border-b-gray-700 text-2xl font-bold">
        <FaTicketAlt className='text-green-600' />
        Ticket infos
      </p>
      <ul className="flex flex-col gap-2 ps-2">
        <li className="text-2xl">
          Title:
        </li>
        <li>
          the tickets title
        </li>
        <li className="text-2xl">
          Status:
        </li>
        <li className='text-success'>
          answered
        </li>
        <li className='text-warning'>
          waiting
        </li>
        <li className='text-error'>
          closed
        </li>
        <li className="text-2xl">
          Create at:
        </li>
        <li>
          2024-11-18 01:26
        </li>
      </ul>
    </div>
  )
}

export default TicketInfos