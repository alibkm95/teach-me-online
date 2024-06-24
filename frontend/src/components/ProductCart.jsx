import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import fallBackCourseCover from '../assets/fallBackCourseCover.png'

import { FaChalkboardTeacher } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const ProductCart = ({ course }) => {

  return (
    <div className=''>
      <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
        <figure><img className='object-cover' src={course.cover.length ? `/api/file/course/${course.cover}` : fallBackCourseCover} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link className='hover:text-emerald-700 line-clamp-1' to={`/courseDetailes/${course._id}`}>
              {course.title.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")}
            </Link>
          </h2>
          <ul className="flex justify-between gap-x-2">
            <li className='flex items-center gap-2 font-bold'>
              <FaChalkboardTeacher size={20} className='text-primary' /> {course.instructor.user.name}
            </li>
            <li className='flex items-center gap-2 font-bold'>
              <FaStar size={20} className='text-warning' /> {course.score}
            </li>
          </ul>
          <p className='line-clamp-3 line-clamp-fallback'>
            {course.description}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/courseDetailes/${course._id}`} className="btn text-white">
              Detailes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart