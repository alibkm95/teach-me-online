import React from 'react'

import Hero from '../components/Hero'
import LatestCourses from '../components/LatestCourses'
import FrontendCourses from '../components/FrontendCourses'
import BackendCourses from '../components/BackendCourses'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <LatestCourses />
      <FrontendCourses />
      <BackendCourses />
    </div>
  )
}

export default Home