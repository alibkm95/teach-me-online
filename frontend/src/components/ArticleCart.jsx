import React from 'react'
import { Link } from 'react-router-dom'

import fallBackCourseCover from '../assets/fallBackCourseCover.png'

const ArticleCart = ({ article }) => {
  return (
    <div className=''>
      <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
        <figure><img className='object-cover' src={article.poster.length ? `/api/file/article/${article.poster}` : fallBackCourseCover} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link className='hover:text-emerald-700 line-clamp-1' to={`/article/${article._id}`}>
              {article.title.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")}
            </Link>
          </h2>
          <p className='line-clamp-3 line-clamp-fallback'>
            {article.paragraphs[0].text}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/article/${article._id}`} className="btn text-white">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCart