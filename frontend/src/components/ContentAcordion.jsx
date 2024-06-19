import React from 'react'

import ContentAcordionItems from './ContentAcordionItems'

const ContentAcordion = ({ season }) => {
  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="accordian" />
      <div className="collapse-title capitalize text-xl font-medium">
        {season.title}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-2">
          {
            season.episodes.map(item => (
              <ContentAcordionItems key={item._id} episode={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ContentAcordion