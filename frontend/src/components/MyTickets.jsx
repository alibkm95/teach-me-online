import React from 'react'

import TicketBox from './TicketBox'

const MyTickets = () => {
  return (
    <div className='grid gap-2 place-items-center md:grid-cols-2'>
      <TicketBox />
      <TicketBox />
      <TicketBox />
      <TicketBox />
      <TicketBox />
      <TicketBox />
      <TicketBox />
      <TicketBox />
    </div>
  )
}

export default MyTickets