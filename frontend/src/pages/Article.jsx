import React, { useEffect, useState } from 'react'

import Writer from '../components/Writer'
import ArticleContent from '../components/ArticleContent'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const Article = () => {

  const { id: articleId } = useParams()
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = async () => {
    setLoading(true)

    const res = await fetch(`/api/article/${articleId}`)
    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      return setArticle(data.article)
    }

    setLoading(false)
    setArticle(null)
    toast.error('error getting data!')
    navigate('/articles')
  }

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
      <div className="grid grid-cols-1 rounded-box gap-2 relative lg:grid-cols-3">
        <aside className="h-max row-start-2 lg:row-start-1 lg:sticky lg:top-0">
          {
            article && <Writer article={article} />
          }
        </aside>
        <div className="lg:col-span-2">
          <div className="bg-base-200 p-4 rounded-box">
            {
              article && <ArticleContent article={article} />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article