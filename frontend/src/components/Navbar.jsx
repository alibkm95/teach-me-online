import React from 'react'

import Actions from './Actions'
import Menu from './Menu'
import Logo from './Logo'
import ShoppingCart from './ShoppingCart'


const Navbar = () => {
  return (
    <header className='bg-base-300 p-4 md:m-2 md:rounded-box'>
      <div className="w-full max-w-7xl mx-auto flex gap-3 items-center justify-between">
        <Logo />
        <nav className="flex gap-1 items-center w-full justify-between">
          <Menu />
          <Actions />
        </nav>
      </div>
      <ShoppingCart />
    </header>
  )
}

export default Navbar