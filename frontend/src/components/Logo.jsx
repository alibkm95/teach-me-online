import React from 'react'

import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className='w-48 md:w-40 lg:w-52'>
      <a href="#">
        <img src={logo} alt="Teach Me Online" />
      </a>
    </div>
  )
}

export default Logo