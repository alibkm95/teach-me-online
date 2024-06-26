import React, { useEffect, useState } from 'react'

import { useAuthContext } from '../context/AuthContext';
import useUpdateUser from '../hooks/useUpdateUser';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import fallBackUserProfile from '../assets/fallBackUserProfile.png'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";

const AccountInfo = () => {

  const { authUser, setAuthUser } = useAuthContext()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [profileImage, setProfileImage] = useState(null)
  const { loading, updateUser } = useUpdateUser()
  const navigate = useNavigate()

  useEffect(() => {
    setUserName(authUser.name)
    setUserEmail(authUser.email)
  }, [authUser])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let userNewInfos = {
      name: userName.trim(),
      email: userEmail.trim()
    }

    if (oldPassword.length && newPassword.length) {
      userNewInfos.oldPassword = oldPassword.trim()
      userNewInfos.newPassword = newPassword.trim()
    }

    if (profileImage) {
      userNewInfos.profileImage = profileImage
    }
    
    const updatedUser = await updateUser(userNewInfos)

    if (updatedUser) {
      setAuthUser(updatedUser)
      setNewPassword('')
      setOldPassword('')
    }
  }

  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })

    const data = await res.json()

    if (res.status === 200) {
      toast.success(data.msg)
      setAuthUser(null)
      localStorage.removeItem('user')
      return navigate('/')
    }

    toast.error(data.msg)
  }

  const handleAttachFile = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0])
    }
  }

  return (
    <div className='p-4 bg-base-200 rounded-box'>
      <div className="flex flex-col items-center gap-2 justify-center">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img
              src={authUser.profile.length ? `/api/file/profile/${authUser.profile}` : fallBackUserProfile}
            />
          </div>
        </div>
        <p className="text-2xl font-bold capitalize">
          {authUser.name}
        </p>
        <p className="text-sm lowercase">
          {authUser.email}
        </p>
        <button type="button" className='btn btn-error btn-sm text-white' onClick={handleLogout}>
          logout
        </button>
      </div>
      <div className="divider"></div>
      <form id="account-form" className='max-w-96 mx-auto' onSubmit={e => { handleSubmit(e) }}>
        <div className="flex flex-col gap-2 px-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <FaUser className='text-emerald-500' />
                Your name:
              </span>
            </div>
            <input
              type="text"
              name='fullName-input'
              placeholder="Full name"
              className="input input-bordered input-sm w-full lg:input-md"
              value={userName}
              onChange={e => { setUserName(e.target.value) }}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <MdEmail className='text-emerald-500' />
                Your E-Mail address:
              </span>
            </div>
            <input
              type="email"
              name='email-input'
              placeholder="E-Mail"
              className="input input-bordered input-sm w-full lg:input-md"
              value={userEmail}
              onChange={e => { setUserEmail(e.target.value) }}
            />
          </label>
          <div className="divider text-xs">password</div>
          <span className='text-xs'>
            <span className="text-red-600 pe-1 leading-none text-xl">*</span>
            If you don't want to update your password, leave it blank!
          </span>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                Old password:
              </span>
            </div>
            <input
              type="password"
              name='old-password-input'
              placeholder="* * * * * * * *"
              className="input input-bordered input-sm w-full lg:input-md"
              value={oldPassword}
              onChange={e => { setOldPassword(e.target.value) }}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                New password:
              </span>
            </div>
            <input
              type="password"
              name='new-password-input'
              placeholder="* * * * * * * *"
              className="input input-bordered input-sm w-full lg:input-md"
              value={newPassword}
              onChange={e => { setNewPassword(e.target.value) }}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2">
          {
            profileImage &&
            <button className="btn btn-warning" onClick={() => { setProfileImage(null) }}>
              Reset selction
            </button>
          }
          {
            !profileImage &&
            <label htmlFor="attach-input" className="btn btn-warning flex items-center justify-center">
              <input
                accept=".jpg, .jpeg, .png"
                type="file"
                name="attach-input"
                id="attach-input"
                className='hidden'
                onChange={e => { handleAttachFile(e) }}
              />
              New Profile
            </label>
          }
          <button type="submit" className="btn btn-success text-white">
            Update info
            {
              loading && <span className="loading loading-ring loading-md"></span>
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default AccountInfo