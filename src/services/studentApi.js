import axios from 'axios'

const API_BASE = '/demoOracleAPI/api/students'

export const fetchStudents = async () => {
  const response = await axios.get(API_BASE)
  return response.data
}

export const addStudent = async (student) => {
  const response = await axios.post(API_BASE, student, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}
