import React from 'react'

import { FaDollarSign } from "react-icons/fa6";

const Invoice = () => {
  return (
    <>
      <div className="flex gap-2">
        <input
          name='discount-input'
          id='discount-input'
          type="text"
          placeholder="insert your discount code ..."
          className="input input-sm input-bordered w-full max-w-xs"
        />
        <button type="submit" className='btn btn-sm btn-warning'>
          Apply
        </button>
      </div>
      <div className="flex flex-col p-2">
        <p className='flex items-center'>Subtotal: 842.50 <FaDollarSign className='text-emerald-600 inline' /></p>
        <p className='flex items-center'>Discount: 32.00 <FaDollarSign className='text-emerald-600 inline' /></p>
        <p className='flex items-center'>Taxt: 18.60 <FaDollarSign className='text-emerald-600 inline' /></p>
        <p className='flex items-center font-bold'>Totla: 829.10 <FaDollarSign className='text-emerald-600 inline' /></p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="btn btn-success btn-sm text-white">
          Continue purchase
        </button>
        <button className="btn btn-error btn-sm text-white">
          Clear all
        </button>
      </div>
    </>
  )
}

export default Invoice