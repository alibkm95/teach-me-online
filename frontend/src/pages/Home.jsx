import React from 'react'

import Hero from '../components/Hero'
import LatestCourses from '../components/LatestCourses'
import FrontendCourses from '../components/FrontendCourses'
import BackendCourses from '../components/BackendCourses'
import LatestArticles from '../components/LatestArticles'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <LatestCourses />
      <FrontendCourses />
      <BackendCourses />
      {/* <LatestArticles /> */}
      {/* todo => latest articles in the end mut be implemented */}
      <FAQ />
    </div>
  )
}

export default Home