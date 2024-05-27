import React from 'react'

import Message from './Message'
import Pagination from './Pagination'

const Conversations = () => {
  return (
    <div>
      <Message messageType='user' />
      <Message messageType='admin' />
      <Message messageType='user' />
      <Message messageType='user' />
      <Message messageType='user' />
      <Message messageType='admin' />
      <div>
        <Pagination />
      </div>
    </div>
  )
}

export default Conversations