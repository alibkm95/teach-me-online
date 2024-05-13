import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.svg'
import Menu from './Menu';

const Navbar = () => {
  return (
    <div className="bg-base-300 md:m-3 rounded relative">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost">
            <CiMenuFries size={25} />
          </button>
        </div>
        <div className="flex-1">
          <div className="logo">
            <a className="text-xl" href='#'>
              <img className='w-36 lg:w-44' src={logo} alt="" />
            </a>
          </div>
          <Menu />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="avatar">
                <div className="w-12 mask mask-squircle">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-gray-700 gap-y-1">
              <li>
                <a href='#' className='btn bg-emerald-700'>
                  <MdAccountCircle size={25} />
                  Login / Signup
                </a>
              </li>
              <li>
                <a href='#' className='btn'>
                  <FaShoppingCart size={25} />
                  Shopping cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar