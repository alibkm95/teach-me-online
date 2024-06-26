import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false)

  const updateUser = async (userNewInfos) => {
    setLoading(true)

    const formData = new FormData()
    const isInfoValid = validateinfo(userNewInfos.email, userNewInfos.name)
    if (!isInfoValid) return null

    formData.append('name', userNewInfos.name)
    formData.append('email', userNewInfos.email)

    if (userNewInfos.oldPassword && userNewInfos.newPassword) {
      const isNewPasswordValid = validateNewPassword(userNewInfos.newPassword)

      if (isNewPasswordValid) {
        formData.append('newPassword', userNewInfos.newPassword)
        formData.append('oldPassword', userNewInfos.oldPassword)
      }
    }

    if (userNewInfos.profileImage) {
      formData.append('profileImage', userNewInfos.profileImage)
    }

    const res = await fetch('/api/user/updateUser', {
      method: "PATCH",
      body: formData
    })

    const data = await res.json()

    if (res.status === 200) {
      toast.success('User updated successfully')
      setLoading(false)
      return data.user
    }

    toast.error(data.msg)
    setLoading(false)
    return null
  }

  return { loading, updateUser }
}

const validateinfo = (email, name) => {
  if (!email.length || !name.length) {
    toast.error('required parameters must be provided!')
    return false
  }
  return true
}

const validateNewPassword = (pass) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(pass)) {
    toast.error('new Password is not in the valid format. \n+ password must be at least 8 characters. \n+ password must contain one uppercase letter. \n+ password must contain one lowercase letter. \n+ password must contain one number')
    return false
  }

  return true
}

export default useUpdateUser