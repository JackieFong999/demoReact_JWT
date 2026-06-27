import api from './axios'

const API_BASE = '/api/students'

export const fetchStudents = async () => {
  const response = await api.get(API_BASE)
  return response.data
}

export const addStudent = async (student) => {
  const response = await api.post(API_BASE, student)
  return response.data
}
