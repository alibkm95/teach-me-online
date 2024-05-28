import React from 'react'

const NewQuestion = () => {
  return (
    <div>
      <form id="question-form">
        <label className="form-control">
          <div className="label">
            <span className="label-text">New question or request :</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="Type here ..." name='question-box'></textarea>
        </label>
        <div className="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
          <label htmlFor="attach-input" className="btn btn-outline btn-error flex items-center justify-center">
            <input type="file" name="attach-input" id="attach-input" className='hidden' />
            Attach file (*.ZIP | *.RAR)
          </label>
          <button type="submit" className="btn btn-success text-white">
            Send
            <span className="loading loading-ring loading-md"></span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewQuestion