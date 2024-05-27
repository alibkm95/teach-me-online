import React from 'react'

import Score from './Score';

import { FaCommentAlt } from "react-icons/fa";

const NewComment = ({ onCancel }) => {
  return (
    <form id='new-comment-form'>
      <label className="form-control">
        <div className="label">
          <span className="label-text flex items-center gap-2">
            <FaCommentAlt className='text-xl text-primary' />
            Submit new Comment :
          </span>
        </div>
        <textarea className="textarea textarea-bordered textarea-primary h-24" placeholder="Tell us what do you think about this course."></textarea>
      </label>
      <Score />
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
        <button type="submit" className='btn btn-success text-white'>
          Submit
        </button>
        <button type="button" className="btn btn-error btn-outline" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default NewComment