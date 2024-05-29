import React from 'react'
import { Link } from 'react-router-dom'

const QuestionBoxSM = () => {
  return (
    <div className='bg-base-300 p-4 w-full max-w-96 rounded-box shadow-xl flex items-center gap-2'>
      <ul>
        <li>
          <span className="font-bold block text-success">Course name: </span>
          <span className='ps-2'>the course name</span>
        </li>
        <li>
          <span className="font-bold block text-success">Last message: </span>
          <span className='ps-2 text-sm line-clamp-3 line-clamp-fallback'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus, dolorum repellat cumque omnis expedita sit quas ipsa ratione dolore!
          </span>
        </li>
        <li className=''>
          <Link to='/courseDetailes/123' className='btn btn-primary btn-outline text-white btn-sm mt-2 ms-auto'>
            Detailes
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default QuestionBoxSM