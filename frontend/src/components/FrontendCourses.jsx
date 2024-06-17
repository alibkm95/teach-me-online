import React, { useEffect, useState } from 'react'

import SectionHeader from './SectionHeader';
import CreateSwiper from './CreateSwiper';

import { MdDashboardCustomize } from "react-icons/md";

const FrontendCourses = () => {

  const [frontendCourses, setFrontendCourses] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/courses?page=1&sort=oldest&category=frontend`)
      .then(res => res.json())
      .then(data => setFrontendCourses(data.courses))
      .catch(err => setFrontendCourses([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className='w-full max-w-7xl mx-auto py-8 px-2 md:px-6'>
      <SectionHeader title={`Frontend Courses`} icon={<MdDashboardCustomize className='text-emerald-500' />} showLink={true} linkPath='/categories' />
      <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
        {
          frontendCourses.length === 0 && loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
        }
        {
          frontendCourses.length > 0 && <CreateSwiper courses={frontendCourses} />
        }
        {
          frontendCourses.length === 0 && !loading && (
            <div role="alert" className="alert bg-base-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" stroke='orange' strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Loading error!</span>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default FrontendCourses