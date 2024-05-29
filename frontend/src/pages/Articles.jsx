import React from 'react'

import SectionHeader from '../components/SectionHeader'
import ArticlesContainer from '../components/ArticlesContainer';

import { RiArticleFill } from "react-icons/ri";

const Articles = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
      <SectionHeader title={`Articles`} icon={<RiArticleFill className='text-emerald-600' />} showLink={false} linkPath='' />
      <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
        <span className="loading loading-bars loading-lg block mx-auto"></span>
        <ArticlesContainer />
      </div>
    </section>
  )
}

export default Articles