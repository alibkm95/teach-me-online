import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import fallBackCourseCover from '../assets/fallBackCourseCover.png'

import { FaTrashCan } from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa6"
import { MenuContext } from '../context/MenuAndCartConext'

const ProductCartSM = ({ course, onRemove }) => {

  const { toggleCart } = useContext(MenuContext)

  return (
    <div className='flex flex-col rounded-box bg-base-200 p-2 gap-2 border border-gray-700'>
      <div className="">
        <img className='w-full block rounded-box bg-neutral-900' src={course.cover.length ? `/api/file/course/${course.cover}` : fallBackCourseCover} alt="" />
      </div>
      <div className="px-4 mt-4">
        <p className='font-bold mb-3'>
          <Link
            to={`/courseDetailes/${course._id}`}
            className='link link-hover hover:text-emerald-600'
            onClick={toggleCart}
          >
            {course.title}
          </Link>
        </p>
        <div className="flex items-center justify-between">
          <p className='flex items-center'>price: {course.price} <FaDollarSign className='text-emerald-600 inline' /></p>
          <button className="btn btn-error btn-sm btn-circle" onClick={() => { onRemove(course) }}>
            <FaTrashCan className='text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCartSM