import React, { useEffect, useRef, useState } from 'react'

import ProductCart from './ProductCart'
import Pagination from '../components/Pagination'
import useGetAllCourses from '../hooks/useGetAllCourses'
import NotFound from '../pages/NotFound'
import toast from 'react-hot-toast'

const ProductContainer = ({ filter }) => {

  const { loading, getAllCourses, courses } = useGetAllCourses()
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedCourses, setPaginatedCourses] = useState([])
  const itemPerPage = 12
  const totalPages = Math.ceil(courses.length / itemPerPage)
  const endIndex = currentPage * itemPerPage
  const startIndex = endIndex - itemPerPage

  const courseContainerRef = useRef()

  useEffect(() => {
    getAllCourses(filter)
    setCurrentPage(1)
  }, [filter])

  useEffect(() => {
    const pageItems = courses.slice(startIndex, endIndex)
    setPaginatedCourses(pageItems)
    courseContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentPage, courses])

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      return toast('no more pages available!', { icon: '🤔' })
    }

    setCurrentPage(prev => {
      return prev + 1
    })
  }

  const handlePrevPage = () => {
    if (currentPage === 1) {
      return toast('this is first page!', { icon: '🤔' })
    }

    setCurrentPage(prev => {
      return prev - 1
    })
  }

  return (
    <div className='p-4 md:p-6 lg:p-8' ref={courseContainerRef}>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        !loading &&
        !courses.length &&
        <NotFound />
      }
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          paginatedCourses.map(course => (
            <ProductCart key={course._id} course={course} />
          ))
        }
      </div>
      {
        courses.length > itemPerPage &&
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      }
    </div>
  )
}

export default ProductContainer