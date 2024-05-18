import React from 'react'

import Hero from '../components/Hero'
import LatestCourses from '../components/LatestCourses'
import FrontendCourses from '../components/FrontendCourses'
import BackendCourses from '../components/BackendCourses'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCourses />
      <FrontendCourses />
      <BackendCourses />
    </div>
  )
}

export default Home