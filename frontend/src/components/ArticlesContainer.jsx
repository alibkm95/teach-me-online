import React, { useEffect, useRef, useState } from 'react'

import Pagination from './Pagination'
import ArticleCart from './ArticleCart'
import useGetArticles from '../hooks/useGetArticles'
import NotFound from '../pages/NotFound'

const ArticlesContainer = () => {

  const { loading, articles, getArticles } = useGetArticles()
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedArticles, setPaginatedArticles] = useState([])
  const itemPerPage = 12
  const totalPages = Math.ceil(articles.length / itemPerPage)
  const endIndex = currentPage * itemPerPage
  const startIndex = endIndex - itemPerPage

  const articlesContainerRef = useRef()

  useEffect(() => {
    getArticles()
  }, [])

  useEffect(() => {
    const pageItems = articles.slice(startIndex, endIndex)
    setPaginatedArticles(pageItems)
    articlesContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentPage, articles])

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
    <div className='p-4 md:p-6 lg:p-8' ref={articlesContainerRef}>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        !loading &&
        !articles.length &&
        <NotFound />
      }
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          paginatedArticles.map(article => (
            <ArticleCart key={article._id} article={article} />
          ))
        }
      </div>
      {
        articles.length > itemPerPage &&
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

export default ArticlesContainer