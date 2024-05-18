import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MenuContext } from '../context/MenuAndCartConext';

import { FaBagShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Actions = () => {

  const { isMenuOpen, toggleMenu, isCartOpen, toggleCart } = useContext(MenuContext)

  return (
    <div className='flex'>
      <div className="indicator">
        <span className="indicator-item top-1 right-2 badge badge-sm badge-error text-white md:top-3 md:right-4">0</span>
        <button onClick={toggleCart} className="btn btn-sm px-2 btn-ghost md:btn-md hover:bg-base-100">
          <FaBagShopping className='text-2xl lg:text-3xl' />
        </button>
      </div>
      <div>
        <Link to='/panel/id' className="btn btn-sm px-2 btn-ghost md:btn-md hover:bg-base-100">
          <FaUserCircle className='text-2xl lg:text-3xl' />
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