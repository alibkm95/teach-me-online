import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import useGetSingleEpisode from '../hooks/useGetSingleEpisode'
import Player from '../components/Player'
import DownloadBox from '../components/DownloadBox'
import Questions from '../components/Questions'

const CourseContents = () => {

  const { id: episodeId } = useParams()
  const { loading, getSingleEpisode, episode } = useGetSingleEpisode()

  useEffect(() => {
    getSingleEpisode(episodeId)
  }, [episodeId])

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2  md:px-6">
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        episode &&
        <>
          <Player episode={episode} />
          <div className="grid grid-cols-1 rounded-box gap-2 relative lg:grid-cols-3">
            <aside className="h-max lg:sticky lg:top-0">
              <DownloadBox />
            </aside>
            <div className="lg:col-span-2">
              <Questions episodeId={episodeId} />
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default CourseContents