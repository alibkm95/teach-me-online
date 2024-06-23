import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NewMessage = ({ refetch, ticketId }) => {

  const [text, setText] = useState('')
  const [attachment, setAttachment] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileAttach = (e) => {
    if (e.target.files[0]) {
      setAttachment(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    if (!text.trim().length) { toast.error('required fields must be provided!') }
    formData.append('newMessage', text.trim())

    if (attachment) {
      formData.append('attachment', attachment)
    }

    const res = await fetch(`/api/ticket/addNewMsg/${ticketId}`, {
      method: "PATCH",
      body: formData
    })

    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      setText('')
      setAttachment(null)
      toast.success('Message sent.')
      return refetch(prev => !prev)
    }

    setLoading(false)
    toast.error(data.msg)
  }

  return (
    <div>
      <form id="question-form" onSubmit={e => { handleSubmit(e) }}>
        <label className="form-control">
          <div className="label">
            <span className="label-text">New message or request :</span>
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

export default NewMessage