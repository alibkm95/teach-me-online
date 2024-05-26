import React from 'react'

import SimilarProductCart from './SimilarProductCart';

import { SiSimilarweb } from "react-icons/si";

const SimilarItems = () => {
  return (
    <div className='my-2 p-4 bg-base-200 rounded-box'>
      <div className="mb-2 border-b border-b-gray-700 pb-2 text-xl flex items-center gap-2">
        <SiSimilarweb className='text-amber-500 text-3xl' />
        Similar Courses
      </div>
      <div className=" flex items-center justify-center flex-wrap gap-2">
        <SimilarProductCart />
        <SimilarProductCart />
        <SimilarProductCart />
        <SimilarProductCart />
        <SimilarProductCart />
      </div>
    </div>
  )
}

export default SimilarItems