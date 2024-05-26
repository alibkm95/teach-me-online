import React from 'react'

import ContentAcordionItems from './ContentAcordionItems'

const ContentAcordion = () => {
  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="accordian" />
      <div className="collapse-title text-xl font-medium">
        session 1
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-2">
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
          <ContentAcordionItems />
        </div>
      </div>
    </div>
  )
}

export default ContentAcordion