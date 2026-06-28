import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/axios'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const navigate = useNavigate()

  const login = async (userName, password) => {
    const res = await api.post('/api/auth/login', { userName, password })
    const jwt = res.data.token
    localStorage.setItem('token', jwt)
    setToken(jwt)
    navigate('/portal', { replace: true })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    navigate('/', { replace: true })
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
