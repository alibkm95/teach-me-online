import React from 'react'

import Message from './Message'

const MessageContainer = ({ question }) => {

  return (
    <div>
      {
        question.conversation.map(msg => (
          <Message key={msg._id} msg={msg} />
        ))
      }
    </div>
  )
}

export default MessageContainer