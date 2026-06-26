import axios from 'axios'

const API_BASE = '/demoOracleAPI/api/teacher-classes'

export const fetchTeacherClasses = async () => {
  const response = await axios.get(API_BASE)
  return response.data
}

export const searchByClassName = async (className) => {
  const response = await axios.get(`${API_BASE}/search/classname`, {
    params: { className }
  })
  return response.data
}

export const searchByLastName = async (lastName) => {
  const response = await axios.get(`${API_BASE}/search/lastname`, {
    params: { lastName }
  })
  return response.data
}
