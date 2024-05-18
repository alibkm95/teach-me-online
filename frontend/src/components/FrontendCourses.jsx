import React from 'react'

import SectionHeader from './SectionHeader';
import CreateSwiper from './CreateSwiper';

import { MdDashboardCustomize } from "react-icons/md";

const FrontendCourses = () => {
  return (
    <section className='w-full max-w-7xl mx-auto py-8 px-2 md:px-6'>
      <SectionHeader title={`Frontend Courses`} icon={<MdDashboardCustomize className='text-red-500' />} showLink={true} linkPath='/categories' />
      <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
        <span className="loading loading-bars loading-lg block mx-auto"></span>
        <CreateSwiper />
      </div>
    </section>
  )
}

export default FrontendCourses