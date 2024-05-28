import React from 'react'

import Player from '../components/Player'
import DownloadBox from '../components/DownloadBox'
import Questions from '../components/Questions'

const CourseContents = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2  md:px-6">
      <Player />
      <div className="grid grid-cols-1 rounded-box gap-2 relative lg:grid-cols-3">
        <aside className="h-max lg:sticky lg:top-0">
          <DownloadBox />
        </aside>
        <div className="lg:col-span-2">
          <Questions />
        </div>
      </div>
    </section>
  )
}

export default CourseContents