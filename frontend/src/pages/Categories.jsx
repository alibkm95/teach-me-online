import React from 'react'

import SectionHeader from '../components/SectionHeader'
import ProductContainer from '../components/ProductContainer';

import Filterbar from '../components/Filterbar'
import { HiTemplate } from "react-icons/hi";

const Categories = () => {
  return (
    <section className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
      <Filterbar />
      <div className="">
        <SectionHeader title={`Available items`} icon={<HiTemplate className='text-emerald-600' />} showLink={false} linkPath='' />
        <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
          <span className="loading loading-bars loading-lg block mx-auto"></span>
          <ProductContainer />
        </div>
      </div>
    </section>
  )
}

export default Categories