import React, { useEffect, useState } from 'react'

import useGetAllCourses from '../hooks/useGetAllCourses'
import SimilarProductCart from './SimilarProductCart';

import { SiSimilarweb } from "react-icons/si";

const SimilarItems = ({ category }) => {

  const { loading, getAllCourses, courses } = useGetAllCourses()
  const [similarCourses, setSimilarCourses] = useState([])

  useEffect(() => {
    getAllCourses({ category: category[0] })
  }, [category])

  useEffect(() => {
    if (courses.length) {
      const justifiedCourses = courses.splice(0, 6)
      setSimilarCourses(justifiedCourses)
    }
  }, [courses])

  return (
    <div className='my-2 p-4 bg-base-200 rounded-box'>
      <div className="mb-2 border-b border-b-gray-700 pb-2 text-xl flex items-center gap-2">
        <SiSimilarweb className='text-amber-500 text-3xl' />
        Similar Courses
      </div>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        similarCourses.length ? (
          <div className=" flex items-center justify-center flex-wrap gap-2">
            {
              similarCourses.map(course => (
                <SimilarProductCart key={course._id} course={course} />
              ))
            }
          </div>
        ) : (
          <div role="alert" className="alert bg-base-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" stroke='orange' strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>No similar courses found!</span>
          </div>
        )
      }
    </div>
  )
}

export default SimilarItems