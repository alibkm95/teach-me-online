import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useVerify = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser, setIsLogin } = useAuthContext()

  const verify = async ({ code, email }) => {
    if (!code.length) return { success: false }

    setLoading(true)

    const res = await fetch('/api/auth/verifyEmail', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ verificationCode: code, email })
    })

    const data = await res.json()

    if (res.status === 200) {
      setAuthUser(data.user)
      setLoading(false)
      localStorage.setItem('user', JSON.stringify(true))
      setIsLogin(true)
      toast.success(data.msg)
      return { success: true }
    }

    setLoading(false)
    toast.error(data.msg)
    return { success: false }
  }

  return { loading, verify }
}

export default useVerify