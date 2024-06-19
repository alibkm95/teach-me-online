import React, { useState } from 'react'

import { FaStar } from "react-icons/fa6";

const Score = ({ score, setScore }) => {

  return (
    <div className='my-2'>
      <p className="mb-2 text-sm">
        Give pointes to this course :
      </p>
      <div className="flex items-center gap-1">
        {
          Array.from({ length: 5 }, (_, index) => (
            <button
              key={index + 1}
              type='button'
              className="btn btn-square btn-sm"
              onClick={() => { setScore(index + 1) }}
            >
              <FaStar className={`${score >= (index + 1) ? 'text-amber-500' : ''}`} />
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Score