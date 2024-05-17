import React from 'react'

import Pattern from '../assets/pattern.png'

import { FaTrashCan } from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa6"

const ProductCartSM = () => {
  return (
    <div className='flex items-center rounded-box bg-base-200 p-2 gap-2'>
      <div className="w-24">
        <img className='aspect-square w-full block rounded-box bg-neutral-900' src={Pattern} alt="" />
      </div>
      <div className="flex-1">
        <p className='font-bold mb-3'>The title of Product</p>
        <div className="flex items-center justify-between">
          <p className='flex items-center'>price: 140.00 <FaDollarSign className='text-emerald-600 inline' /></p>
          <button className="btn btn-error btn-sm btn-circle">
            <FaTrashCan className='text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCartSM