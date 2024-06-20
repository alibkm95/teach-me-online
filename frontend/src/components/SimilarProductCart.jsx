import React from 'react'
import { Link } from 'react-router-dom'

import fallBackCourseCover from '../assets/fallBackCourseCover.png'

const SimilarProductCart = ({ course }) => {
  return (
    <div className="bg-base-300 p-2 w-full max-w-96 rounded-box shadow-xl flex items-center gap-2">
      <div className="max-w-24 bg-lime-500 rounded-box">
        <img className='object-contain rounded' src={course.cover.length ? course.cover : fallBackCourseCover} alt="" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <h6 className="font-semibold text-white">
          {course.title}
        </h6>
        <Link
          to={`/courseDetailes/${course._id}`}
          className='btn btn-xs btn-outline btn-primary w-max'
        >
          Detailes
        </Link>
      </div>
    </div>
  )
}

export default SimilarProductCart