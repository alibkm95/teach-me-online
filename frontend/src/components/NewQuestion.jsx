import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useCourseAccess from '../hooks/useCourseAccess'
import toast from 'react-hot-toast'

const NewQuestion = ({ refetch, episode }) => {

  const { courseAccess, hasAccessToCourse } = useCourseAccess()
  const [text, setText] = useState('')
  const [attachment, setAttachment] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    hasAccessToCourse(episode.course._id)
  }, [])

  const handleFileAttach = (e) => {
    if (e.target.files[0]) {
      setAttachment(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!courseAccess) {
      toast.error('You are not subscribed to this course!')
      return navigate(`/courseDetailes/${episode.course._id}`)
    }

    let formData = new FormData()
    formData.append('episodeId', episode._id)
    formData.append('message', text.length > 0 ? text : null)
    if (attachment) { formData.append('attachment', attachment) }

    const res = await fetch('/api/question', {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    if (res.status !== 201) {
      setLoading(false)
      return toast.error(data.msg)
    }

    setLoading(false)
    setAttachment(null)
    setText('')
    refetch(prev => !prev)
  }

  return (
    <div>
      <form id="question-form" onSubmit={e => { handleSubmit(e) }}>
        <label className="form-control">
          <div className="label">
            <span className="label-text">New question or request :</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Type here ..."
            name='question-box'
            value={text}
            onChange={e => { setText(e.target.value) }}
          ></textarea>
        </label>
        <div className="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
          {
            !attachment &&
            <label htmlFor="attach-input" className="btn btn-outline btn-error flex items-center justify-center">
              <input
                type="file"
                name="attach-input"
                id="attach-input"
                className='hidden'
                onChange={e => { handleFileAttach(e) }}
              />
              Attach file (*.ZIP)
            </label>
          }
          {
            attachment &&
            <button type='button' className="btn btn-outline btn-error" onClick={() => { setAttachment(null) }}>
              Remove selected file
            </button>
          }
          <button type="submit" className="btn btn-success text-white">
            Send
            {
              loading && <span className="loading loading-ring loading-md"></span>
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewQuestion