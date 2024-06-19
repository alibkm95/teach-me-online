import React, { useEffect, useState } from 'react'
import NewComment from './NewComment'
import Conversations from './Conversations'
import useGetCourseComments from '../hooks/useGetCourseComments'

const CommentsContainer = ({ courseId }) => {

  const { loading, getComments, comments } = useGetCourseComments()
  const [showNewComment, setShowNewComment] = useState(false)
  const [refetchComments, setRefetchComments] = useState(false)

  useEffect(() => {
    getComments(courseId)
  }, [courseId, refetchComments])

  const toggleNewComment = () => {
    setShowNewComment(!showNewComment)
  }

  return (
    <div>
      {
        !showNewComment &&
        <button className="btn btn-success text-white" onClick={toggleNewComment}>Add your comment</button>
      }
      {
        showNewComment &&
        <NewComment onCancel={toggleNewComment} onSuccess={setRefetchComments} courseId={courseId} />
      }
      <div className="divider">Comments</div>
      {
        loading &&
        <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        comments.length > 0 &&
        <Conversations comments={comments} />
      }
      {
        comments.length === 0 &&
        !loading &&
        <div role="alert" className="alert bg-base-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" stroke='orange' strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>No comment found! be the first one who submits a comment.</span>
        </div>
      }
    </div>
  )
}

export default CommentsContainer