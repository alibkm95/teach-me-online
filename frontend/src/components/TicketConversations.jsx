import React from 'react'

import NewQuestion from './NewQuestion';
import Conversations from './Conversations'

const TicketConversations = () => {
  return (
    <div className='bg-base-200 p-4 rounded-box'>
      <Conversations />
      <div className="divider"></div>
      <NewQuestion />
    </div>
  )
}

export default TicketConversations