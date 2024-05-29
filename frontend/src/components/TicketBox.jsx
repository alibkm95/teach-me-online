import React from 'react'
import { Link } from 'react-router-dom'

const TicketBox = () => {
  return (
    <div className='bg-base-300 p-4 w-full max-w-96 rounded-box shadow-xl flex items-center gap-2'>
      <ul>
        <li>
          <span className="font-bold block text-success">Title: </span>
          <span className='ps-2'>Tickets title</span>
        </li>
        <li>
          <span className="font-bold block text-success">Created At: </span>
          <span className='ps-2'>2024-08-16 12:34</span>
        </li>
        <li>
          <span className="font-bold block text-success">Status: </span>
          <span className='ps-2 text-success'>answered</span>
          <span className='ps-2 text-warning'>waiting</span>
          <span className='ps-2 text-error'>closed</span>
        </li>
        <li>
          <Link to='/ticketDetailes/123' className='btn btn-primary btn-outline text-white btn-sm mt-2 ms-auto'>
            Detailes
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TicketBox