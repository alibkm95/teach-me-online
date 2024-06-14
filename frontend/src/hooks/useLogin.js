import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser, setIsLogin } = useAuthContext()

  const login = async ({ email, password }) => {
    const isValid = validateInputs({ email, password })

    if (!isValid) return { success: false }

    setLoading(true)

    const res = await fetch('/api/auth/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (res.status === 200) {
      setAuthUser(data.user)
      setLoading(false)
      localStorage.setItem('user', true)
      setIsLogin(true)
      toast.success('login success!')
      return { success: true }
    }

    setLoading(false)
    toast.error(data.msg)
    return { success: false }
  }

  return { loading, login }
}

function validateInputs({ email, password }) {
  if (!email.length || !password.length) {
    toast.error('please fill all the fields!')
    return false
  }
  return true
}

export default useLogin