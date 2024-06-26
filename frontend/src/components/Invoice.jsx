import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MenuContext } from '../context/MenuAndCartConext';
import useInvoice from '../hooks/useInvoice';

import { FaDollarSign } from "react-icons/fa6";

const Invoice = () => {
  const { clearCart, toggleCart, cartItems } = useContext(MenuContext)
  const { subTotal, discount, tax, total } = useInvoice()
  const navigate = useNavigate()

  const handleClear = () => {
    clearCart()
    toggleCart()
  }

  const handlepayment = () => {
    if (!cartItems.length) {
      toast.error('Your shopping cart is empty!')
      return toggleCart()
    }

    navigate('/payment')
  }

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
        <p className='flex items-center'>Subtotal: {subTotal} <FaDollarSign className='text-emerald-600 inline' /></p>
        <p className='flex items-center'>Discount: {discount} <FaDollarSign className='text-emerald-600 inline' /></p>
        <p className='flex items-center'>Taxt: {tax} <FaDollarSign className='text-emerald-600 inline' /></p>
        <p className='flex items-center font-bold'>Totla: {total} <FaDollarSign className='text-emerald-600 inline' /></p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="btn btn-success btn-sm text-white" onClick={handlepayment}>
          Continue purchase
        </button>
        <button className="btn btn-error btn-sm text-white" onClick={handleClear}>
          Clear all
        </button>
      </div>
    </>
  )
}

export default Invoice