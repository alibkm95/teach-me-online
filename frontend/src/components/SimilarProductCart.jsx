import React from 'react'
import { Link } from 'react-router-dom'

import courseImg from '../assets/JavaScript.png'

const SimilarProductCart = () => {
  return (
    <div className="bg-base-300 p-2 w-full max-w-96 rounded-box shadow-xl flex items-center gap-2">
      <div className="aspect-square max-w-20 bg-lime-500 rounded-box p-1">
        <img className='object-cover' src={courseImg} alt="" />
      </div>
      <div className="flex w-full items-center justify-between flex-wrap gap-2">
        <h6 className="font-semibold text-xl text-white">
        Course Title
        </h6>
        <Link to='/courseDetailes/123' className='btn btn-sm btn-outline btn-primary'>
          Detailes
        </Link>
      </div>
    </div>
  )
}

export default SimilarProductCart