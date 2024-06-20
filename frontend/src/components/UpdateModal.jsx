import React from 'react'

const UpdateModal = ({ closeUpdateModal, updateReview }) => {
  return (
    <dialog
      id="updateModal"
      className="modal modal-open modal-bottom sm:modal-middle"
      onClick={closeUpdateModal}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">You already submited a review to this course!</h3>
        <p className="py-4 text-center">Would you like to update it?</p>
        <p className="text-xs italic text-center">note: only the text of your comment will be updated.</p>
        <div className="modal-action">
          <div>
            <button className="btn btn-primary mx-1" onClick={updateReview}>Update</button>
            <button className="btn btn-error mx-1" onClick={closeUpdateModal}>Cancel</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default UpdateModal