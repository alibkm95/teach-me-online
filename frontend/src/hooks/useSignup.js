import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
  const [loading, setLoading] = useState(false)

  const signup = async ({ fullName, email, password }) => {
    const isValid = validateInputs({ fullName, email, password })

    if (!isValid) return { success: false }

    setLoading(true)

    const res = await fetch('/api/auth/register', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fullName, email, password })
    })

    const data = await res.json()

    if (res.status === 201) {
      toast.success(data.msg)
      setLoading(false)
      return { success: true }
    }

    toast.error(data.msg)
    setLoading(false)
    return { success: false }
  }

  return { loading, signup }
}

function validateInputs({ fullName, email, password }) {
  if (!fullName.length || !email.length || !password.length) {
    toast.error('please fill all the fields!')
    return false
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(email)) {
    toast.error('inserted email is not a valid email address!')
    return false
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(password)) {
    toast.error('the entered password is not in the valid format. \n+ password must be at least 8 characters. \n+ password must contain one uppercase letter. \n+ password must contain one lowercase letter. \n+ password must contain one number')
    return false
  }

  return true
}

export default useSignup