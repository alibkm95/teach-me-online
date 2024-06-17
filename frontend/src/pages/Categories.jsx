import React, { useEffect, useState } from 'react'

import SectionHeader from '../components/SectionHeader'
import ProductContainer from '../components/ProductContainer';
import Filterbar from '../components/Filterbar'

import { HiTemplate } from "react-icons/hi";

const Categories = () => {

  const [filter, setFilter] = useState({
    category: 'all',
    lang: 'all',
    sort: 'newest',
    page: 1,
    search: ''
  })

  const filterHandler = (filterOpt) => {

  }

  return (
    <section className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
      <Filterbar onFilter={filterHandler} />
      <div className="">
        <SectionHeader title={`Available courses`} icon={<HiTemplate className='text-emerald-600' />} showLink={false} linkPath='' />
        <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
          <ProductContainer filter={filter} />
        </div>
      </div>
    </section>
  )
}

export default Categories