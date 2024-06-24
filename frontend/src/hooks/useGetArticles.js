import React, { useState } from 'react'

const useGetArticles = () => {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    setLoading(true)

    const res = await fetch('/api/article')
    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      return setArticles(data.articles)
    }

    setLoading(false)
    setArticles([])
  }

  return { loading, articles, getArticles }
}

export default useGetArticles