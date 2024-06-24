import React, { useContext, useEffect } from 'react'

import ProductCartSM from './ProductCartSM';
import Invoice from './Invoice';
import { MenuContext } from '../context/MenuAndCartConext';
import useGetUserCourses from '../hooks/useGetUserCourses';
import { useAuthContext } from '../context/AuthContext';

import { IoClose } from "react-icons/io5";

const ShoppingCart = () => {

  const { authUser } = useAuthContext()
  const { isCartOpen, toggleCart, cartItems, removeCourseFromCart } = useContext(MenuContext)
  const { userCourses, getUserCourses } = useGetUserCourses()

  useEffect(() => {
    if (authUser) {
      getUserCourses()
    }
  }, [authUser])

  useEffect(() => {
    if (userCourses.length) {
      cartItems.map(item => {
        if (userCourses.some(userCourse => userCourse.course._id === item._id)) {
          removeCourseFromCart(item)
        }
      })
    }
  }, [userCourses])

  const handleRemoveItem = (course) => {
    removeCourseFromCart(course)
  }

  return (
    <div className={`fixed w-80 h-full top-0 right-0 bg-base-300 z-[999] border-s border-s-gray-600 transition-all duration-200 ${isCartOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="flex flex-col w-full h-full">
        <div className=" px-4 py-2 flex-0">
          <button onClick={toggleCart} className="btn btn-sm btn-square btn-ghost text-white">
            <IoClose size={25} />
          </button>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto gap-2 bg-base-100 mx-2 rounded-box p-2">
          {
            cartItems.length > 0 &&
            cartItems.map(course => (<ProductCartSM key={course._id} course={course} onRemove={handleRemoveItem} />))
          }
          {
            cartItems.length === 0 &&
            <div role="alert" className="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke='orange'
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>There is no product in your shopping basket yet !</span>
            </div>
          }
        </div>
        <div className='flex-0 px-4 py-2'>
          <Invoice />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart