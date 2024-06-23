import React from 'react'

import NewMessage from './NewMessage';
import MessageContainer from './MessageContainer';

const TicketConversations = ({ ticket, refetch }) => {
  return (
    <div className='bg-base-200 p-4 rounded-box'>
      <MessageContainer question={ticket} />
      <div className="divider"></div>
      <NewMessage refetch={refetch} ticketId={ticket._id} />
    </div>
  )
}

export default TicketConversations