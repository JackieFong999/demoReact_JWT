import api from './axios'

const API_BASE = '/api/teacher-classes'

export const fetchTeacherClasses = async () => {
  const response = await api.get(API_BASE)
  return response.data
}
