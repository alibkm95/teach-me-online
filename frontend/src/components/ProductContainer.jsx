import React, { useEffect } from 'react'

import ProductCart from './ProductCart'
import Pagination from '../components/Pagination'
import useGetAllCourses from '../hooks/useGetAllCourses'
import NotFound from '../pages/NotFound'

const ProductContainer = ({ filter }) => {

  const { loading, getAllCourses, coursesData } = useGetAllCourses()

  useEffect(() => {
    getAllCourses(filter)
  }, [])

  return (
    <div className='p-4 md:p-6 lg:p-8'>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        !loading &&
        !coursesData?.courses.length &&
        <NotFound />
      }
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          coursesData?.courses.map(course => (
            <ProductCart key={course._id} course={course} />
          ))
        }
      </div>
      {
        coursesData && coursesData.numOfPages > 1 && <Pagination />
      }
    </div>
  )
}

export default ProductContainer