import React from 'react'

import courseImg from '../assets/JavaScript.png'
import fallBackCourseCover from '../assets/fallBackCourseCover.png'
import References from './References'

const ArticleContent = ({ article }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-xl font-bold md:text-3xl px-4 pb-2 border-b border-b-gray-700">
        {article.title}
      </h2>
      <div className="w-full p-2 md:p-4 lg:p-8 rounded-box bg-base-300">
        <img src={article.poster.length > 0 ? `/api/file/article/${article.poster}` : fallBackCourseCover} alt="article image" className='w-full rounded-box' />
      </div>
      {
        article.paragraphs.length > 0 &&
        article.paragraphs.map((paragraph, index) => (
          <div className='px-4' key={index + 1}>
            {paragraph.title.length > 0 && <p className="font-bold text-xl py-2 capitalize">{paragraph.title} :</p>}
            {paragraph.text}
          </div>
        ))
      }
      <div className="divider">References</div>
      <References refs={article.references} />
    </div>
  )
}

export default ArticleContent