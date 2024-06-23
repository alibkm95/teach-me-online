import React from 'react'
import { Link } from 'react-router-dom'

const QuestionBoxSM = ({ q }) => {

  const statusOpt = {
    answered: ['answered', 'bg-success text-white'],
    pending: ['pending', 'bg-warning text-black']
  }

  return (
    <div className='bg-base-300 p-4 w-full max-w-96 rounded-box shadow-xl flex items-center gap-2'>
      <ul>
        <li>
          <span className="block text-success capitalize">Course info : </span>
          <span className='ps-2'>{q.courseTitle} - {q.seasonTitle} - {q.episode.title}</span>
        </li>
        <li>
          <span className="block text-success">created at : </span>
          <span className='ps-2'>{new Date(q.createdAt).toLocaleDateString()}</span>
        </li>
        <li>
          <span className="block text-success">status : </span>
          <span
            className={`block m-1 p-2 text-sm w-max rounded-full ${statusOpt[q.questionStatus][1]}`}
          >
            {statusOpt[q.questionStatus][0]}
          </span>
        </li>
        <li className=''>
          <Link to={`/courseContents/${q.episode._id}`} className='btn btn-neutral btn-sm mt-2 ms-auto'>
            Detailes
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default QuestionBoxSM