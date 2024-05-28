import React from 'react'

import Message from './Message'
import Pagination from './Pagination'

const Conversations = () => {
  return (
    <div>
      <Message file={true} messageType='user' />
      <Message file={true} messageType='admin' />
      <Message file={true} messageType='user' />
      <Message file={true} messageType='user' />
      <Message file={true} messageType='user' />
      <Message file={true} messageType='admin' />
      <div>
        <Pagination />
      </div>
    </div>
  )
}

export default Conversations