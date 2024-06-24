import React, { useContext, useEffect, useState } from 'react'

import useCourseAccess from '../hooks/useCourseAccess';

import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

import fallBackCourseCover from '../assets/fallBackCourseCover.png'
import { MenuContext } from '../context/MenuAndCartConext';

const CourseDetailesBanner = ({ course }) => {
  const { addToCart, removeCourseFromCart, cartItems } = useContext(MenuContext)
  const { hasAccessToCourse, courseAccess } = useCourseAccess()

  useEffect(() => {
    hasAccessToCourse(course._id)
  }, [])

  const isInCart = () => {
    const existingCourse = cartItems.find(item => {
      return item._id === course._id
    })
    if (existingCourse) { return true }
    return false
  }

  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      <div className="w-full">
        <video
          className='w-full aspect-video rounded-box'
          src={course.intro}
          poster={course.cover.length ? `/api/file/course/${course.cover}` : fallBackCourseCover}
          controls>
        </video>
      </div>
      <div className="flex flex-col gap-4 px-4 lg:px-0">
        <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>{course.title}</h2>
        <p className='md:text-lg xl:text-xl'>{course.description}</p>
        <span className='flex items-center gap-1 text-2xl'>
          {course.price}
          <FaMoneyCheckDollar className='text-amber-500' />
        </span>
        <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">
          {
            courseAccess &&
            <>
              <span className='text-white flex items-center gap-1'>
                <FaUser size={25} className='text-emerald-600' />
                You are subscribed to this course.
              </span>
              <a href="#lessons" className="btn btn-success rounded-full text-white">
                <FaBookOpen size={25} />
                Start Course
              </a>
            </>
          }
          {
            !courseAccess &&
            isInCart() === false &&
            <>
              <span className='text-white flex items-center gap-1'>
                <FaUser size={25} className='text-emerald-600' />
                You are not subscribed to this course.
              </span>
              <button className="btn btn-success rounded-full text-white" onClick={() => { addToCart(course) }}>
                <FaCartPlus size={25} />
                add to cart
              </button>
            </>
          }
          {
            !courseAccess &&
            isInCart() === true &&
            <>
              <span className='text-white flex items-center gap-1'>
                <FaCheckCircle size={25} className='text-emerald-600' />
                Course added to your shopping cart.
              </span>
              <button className="btn btn-error rounded-full text-white" onClick={() => { removeCourseFromCart(course) }}>
                <FaTrashCan size={25} />
                remove
              </button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default CourseDetailesBanner