import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className='w-48 md:w-40 lg:w-52'>
      <Link to="/">
        <img src={logo} alt="Teach Me Online" />
      </Link>
    </div>
  )
}

export default Logo