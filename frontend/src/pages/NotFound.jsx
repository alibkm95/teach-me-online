import React from 'react'
import { Link } from 'react-router-dom'

import notfoundImg from '../assets/404.svg'

const NotFound = () => {
  return (
    <section className="w-full max-w-6xl min-h-screen mx-auto my-6 p-2">
      <div className="grid grid-cols-1 gap-4 place-items-center p-6 bg-base-200 rounded-box md:grid-cols-2">
        <div className="w-full bg-base-300 rounded-box">
          <img className='w-full block aspect-square' src={notfoundImg} alt="not found image" />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-3xl font-bold text-center">
            Sorry, nothing found!
          </p>
          <Link to='/' className='btn btn-success text-white'>
            Back to home page
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound