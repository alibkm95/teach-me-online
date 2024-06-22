import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginAlertModal = ({ onCancel }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    return navigate('/login')
  }

  return (
    <dialog
      id="loginAlertModal"
      className="modal modal-open modal-bottom sm:modal-middle"
      onClick={onCancel}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">You are not logedin!</h3>
        <p className="py-4 text-center">Would you like to login with your account?</p>
        <div className="modal-action">
          <div>
            <button className="btn btn-primary mx-1" onClick={handleClick}>Go to login</button>
            <button className="btn btn-error mx-1" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default LoginAlertModal