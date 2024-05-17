import React, { useContext } from 'react'

import ProductCartSM from './ProductCartSM';
import Invoice from './Invoice';
import { MenuContext } from '../context/MenuAndCartConext';

import { IoClose } from "react-icons/io5";

const ShoppingCart = () => {

  const { isCartOpen, toggleCart } = useContext(MenuContext)

  return (
    <div className={`fixed w-80 h-full top-0 right-0 bg-base-300 z-[999] border-s border-s-gray-600 transition-all duration-200 ${isCartOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="flex flex-col w-full h-full">
        <div className=" px-4 py-2 flex-0">
          <button onClick={toggleCart} className="btn btn-sm btn-square btn-error text-white">
            <IoClose size={25} />
          </button>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto gap-2 bg-base-100 mx-2 rounded-box p-2">
          <ProductCartSM />
          <ProductCartSM />
          <ProductCartSM />
          <ProductCartSM />
          <ProductCartSM />
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>There is no product in your shopping basket yet !</span>
          </div>
        </div>
        <div className='flex-0 px-4 py-2'>
          <Invoice />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart