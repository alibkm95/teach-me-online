import React from 'react'
import { Link } from 'react-router-dom'

import courseImg from '../assets/JavaScript.png'

const ArticleCart = () => {
  return (
    <div className=''>
      <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
        <figure className='bg-green-500 p-2'><img className='aspect-square' src={courseImg} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link className='hover:text-emerald-700' to='/courseDetailes/123'>
              Article Title
            </Link>
          </h2>
          <p className='line-clamp-3 line-clamp-fallback'>
            If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end">
            <Link to='/courseDetailes/123' className="btn text-white">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCart