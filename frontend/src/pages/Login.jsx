import React from 'react'

import LoginForm from '../components/LoginForm';

import { FaSignInAlt } from "react-icons/fa";

import loginImg from '../assets/login.svg'

const Login = () => {
  return (
    <section className='w-full max-w-6xl mx-auto my-6 p-2'>
      <div className="bg-base-200 p-4 rounded-box md:p-8">
        <div className="flex items-center justify-center gap-2 font-bold mb-6 text-2xl md:justify-start lg:text-3xl">
          <FaSignInAlt className='text-amber-500' />
          <h5>Login</h5>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1 bg-base-300 rounded-box">
            <img className='w-full block' src={loginImg} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-4 md:py-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login