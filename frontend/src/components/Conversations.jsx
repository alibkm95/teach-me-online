import React, { useEffect, useState } from 'react'

import Review from './Review'
import Pagination from './Pagination'

const Conversations = ({ comments }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedComments, setpaginatedComments] = useState([])
  const itemPerPage = 20
  const totalPages = Math.ceil(comments.length / itemPerPage)
  const endIndex = currentPage * itemPerPage
  const startIndex = endIndex - itemPerPage

  useEffect(() => {
    const pageItems = comments.slice(startIndex, endIndex)
    setpaginatedComments(pageItems)
  }, [currentPage, comments])

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
    <div>
      {
        paginatedComments.map(comment => (<Review key={comment._id} review={comment} />))
      }
      <div>
        {
          comments.length > itemPerPage &&
          <Pagination
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        }
      </div>
    </div>
  )
}

export default Conversations