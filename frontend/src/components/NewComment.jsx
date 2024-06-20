import React, { useRef, useState } from 'react'

import Score from './Score';
import UpdateModal from './UpdateModal';
import toast from 'react-hot-toast';
import { FaCommentAlt } from "react-icons/fa";
import { useAuthContext } from '../context/AuthContext';

const NewComment = ({ onCancel, courseId, onSuccess }) => {

  const { authUser } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(5)
  const [review, setReview] = useState('')
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!authUser) { return toast.error('You are not logged in!') }
    setLoading(true)
    if (!review.length) {
      toast.error('the comment text can not be empty!')
      return setLoading(false)
    }
    const res = await fetch(`/api/review/${courseId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: score, comment: review })
    })
    const data = await res.json()
    if (res.status === 201) {
      setLoading(false)
      onSuccess(prev => !prev)
      return onCancel()
    }
    if (res.status === 400 && data.msg === 'you already submited a review to this course!') {
      return setShowUpdateModal(true)
    }
    setLoading(false)
    toast.error(data.msg)
  }

  const updateReview = async () => {
    const res = await fetch(`/api/review/${courseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: review })
    })
    const data = await res.json()
    if (res.status === 200) {
      closeUpdateModal()
      onSuccess(prev => !prev)
      onCancel()
      return toast.success('comment updated successfully!')
    }

    closeUpdateModal()
    toast.error(data.msg)
  }

  const closeUpdateModal = () => {
    setShowUpdateModal(false)
    setLoading(false)
  }

  return (
    <>
      <form id='new-comment-form' onSubmit={e => { submitHandler(e) }}>
        <label className="form-control">
          <div className="label">
            <span className="label-text flex items-center gap-2">
              <FaCommentAlt className='text-xl text-primary' />
              Submit new Comment :
            </span>
          </div>
          <textarea
            id='new-comment-input'
            name='new-comment-input'
            className="textarea textarea-bordered textarea-primary h-24"
            placeholder="Tell us what do you think about this course."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </label>
        <Score score={score} setScore={setScore} />
        <ul className="list-disc marker:text-red-600 ps-6">
          <li className='text-sm'>
            In order to submit a new comment you need to login with your Acc.
          </li>
          <li className='text-sm'>
            Comments will be published after admin approval.
          </li>
          <li className='text-sm'>
            If no points are given, 5 points will be considered by default.
          </li>
          <li className='text-sm'>
            Each user can submit only one comment.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button type="submit" className='btn btn-success text-white flex gap-4'>
            Submit
            {
              loading && <span className="loading loading-ring loading-md"></span>
            }
          </button>
          <button type="button" className="btn btn-error btn-outline" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
      {
        showUpdateModal && <UpdateModal closeUpdateModal={closeUpdateModal} updateReview={updateReview} />
      }
    </>
  )
}

export default NewComment