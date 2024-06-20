import React from 'react'

import fallBackUserProfile from '../assets/fallBackUserProfile.png'

const Message = ({ msg }) => {

  const roleOpt = {
    USER: 'student',
    ROOTADMIN: 'admin',
    INSTRUCTOR: 'instructor'
  }

  return (
    <div className={`chat ${msg.sender.role === 'USER' ? 'chat-start' : 'chat-end'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="profile" src={msg.sender.profile.length ? msg.sender.profile : fallBackUserProfile} />
        </div>
      </div>
      <div className="chat-header">
        {msg.sender.name}
        <time className="text-xs opacity-50"> {new Date(msg.createdAt).toLocaleDateString()}</time>
      </div>
      <div className={`chat-bubble ${msg.sender.role === 'USER' ? 'chat-bubble-primary' : 'chat-bubble-success'}`}>
        {msg.message}
        {
          msg.attachment.length > 0 &&
          <a href={msg.attachment} className='link link-hover block w-max glass px-4 rounded mt-4 bg-amber-500'>
            Attachment
          </a>
        }
      </div>
      <div className="chat-footer opacity-50">
        {roleOpt[msg.sender.role]}
      </div>
    </div>
  )
}

export default Message