import React from 'react'

const Message = ({ messageType }) => {
  return (
    <div className={`chat ${messageType === 'user' ? 'chat-start' : 'chat-end'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-header">
        Maria Fernandes
        <time className="text-xs opacity-50"> 2024-03-18 15:33</time>
      </div>
      <div className={`chat-bubble ${messageType === 'user' ? 'chat-bubble-primary' : 'chat-bubble-success'}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, eaque!
      </div>
      <div className="chat-footer opacity-50">
        user role
      </div>
    </div>
  )
}

export default Message