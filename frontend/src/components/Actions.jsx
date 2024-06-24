import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MenuContext } from '../context/MenuAndCartConext';
import { useAuthContext } from '../context/AuthContext';

import fallBackUserProfile from '../assets/fallBackUserProfile.png'

import { FaBagShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Actions = () => {

  const { isMenuOpen, toggleMenu, isCartOpen, toggleCart, cartItems } = useContext(MenuContext)
  const { authUser } = useAuthContext()

  return (
    <div className='flex'>
      <div className="indicator">
        {
          cartItems.length > 0 &&
          <span className="indicator-item top-1 right-2 badge badge-sm badge-error text-white md:top-3 md:right-4">
            {cartItems.length > 9 ? '9+' : cartItems.length}

          </span>
        }
        <button onClick={toggleCart} className="btn btn-sm px-2 btn-ghost md:btn-md hover:bg-base-100">
          <FaBagShopping className='text-2xl lg:text-3xl' />
        </button>
      </div>
      <div>
        <Link to='/panel' className="btn btn-sm px-2 btn-ghost md:btn-md hover:bg-base-100">
          <img
            className='w-8 h-8 rounded-full lg:w-10 lg:h-10'
            src={authUser && authUser.profile.length ? `/api/file/profile/${authUser.profile}` : fallBackUserProfile}
            alt=""
          />
        </Link>
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className="btn btn-sm px-2 btn-ghost md:btn-md hover:bg-base-100">
          {!isMenuOpen && <CiMenuFries className='text-2xl lg:text-3xl' />}
          {isMenuOpen && <IoClose className='text-2xl lg:text-3xl' />}
        </button>
      </div>
    </div>
  )
}

export default Actions