import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('user')) || false)
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    if (!isLogin) {
      return setAuthUser(null)
    }

    const getMe = async () => {
      const res = await fetch('/api/user/showMe')
      const data = await res.json()
      if (res.status === 200) {
        return setAuthUser(data.user)
      }
      setAuthUser(null)
    }

    getMe()
  }, [isLogin])

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  )
}