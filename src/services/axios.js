import axios from 'axios'

const api = axios.create({
  baseURL: '/demoOracleAPI',
  headers: { 'Content-Type': 'application/json' },
})

// 自動帶上 JWT Token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 401 時自動導回登入頁（僅在非登入頁時）
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      // 避免在 login 頁面也觸發重整，讓 React 內部的 error handling 處理即可
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
