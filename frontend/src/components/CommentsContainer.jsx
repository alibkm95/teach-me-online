import React, { useState } from 'react'
import NewComment from './NewComment'
import Conversations from './Conversations'

const CommentsContainer = () => {

  const [showNewComment, setShowNewComment] = useState(false)

  const toggleNewComment = () => {
    setShowNewComment(!showNewComment)
  }

  return (
    <div>
      {!showNewComment && <button className="btn btn-success text-white" onClick={toggleNewComment}>Add your comment</button>}
      {showNewComment && <NewComment onCancel={toggleNewComment} />}
      <div className="divider">Comments</div>
      <Conversations />
    </div>
  )
}

export default CommentsContainer