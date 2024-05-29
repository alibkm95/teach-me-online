import React from 'react'

import Writer from '../components/Writer'
import ArticleContent from '../components/ArticleContent'

const Article = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
      <div className="grid grid-cols-1 rounded-box gap-2 relative lg:grid-cols-3">
        <aside className="h-max row-start-2 lg:row-start-1 lg:sticky lg:top-0">
          <Writer />
        </aside>
        <div className="lg:col-span-2">
          <div className="bg-base-200 p-4 rounded-box">
            <ArticleContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article