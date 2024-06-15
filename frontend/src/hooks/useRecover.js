import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useRecover = () => {
  const [loading, setLoading] = useState(false)
  const [candidateAcc, setCandidateAcc] = useState('')

  const findAccount = async ({ email }) => {
    if (!email.length) {
      toast.error('email is not provided!')
      return { success: false }
    }

    setLoading(true)

    const res = await fetch('/api/auth/forgetPassword', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })

    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      toast.success(data.msg)
      setCandidateAcc(email)
      return { success: true }
    }

    setLoading(false)
    toast.error(data.msg)
    setCandidateAcc('')
    return { success: false }
  }

  const recover = async ({ verificationCode, password }) => {
    const isValid = validateInputs(verificationCode, password)

    if (!isValid || !candidateAcc.length) return { success: false }

    setLoading(true)

    const res = await fetch('/api/auth/resetPassword', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: candidateAcc, resetPasswordCode: verificationCode, password })
    })

    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      toast.success(data.msg)
      return { success: true }
    }

    setLoading(false)
    toast.error(data.msg)
    return { success: false }
  }

  return { loading, findAccount, recover }
}

function validateInputs(verificationCode, password) {

  if (!verificationCode.length || !password.length) {
    toast.error('required fields must be provided!')
    return false
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(password)) {
    toast.error('the entered password is not in the valid format. \n+ password must be at least 8 characters. \n+ password must contain one uppercase letter. \n+ password must contain one lowercase letter. \n+ password must contain one number')
    return false
  }

  return true
}

export default useRecover