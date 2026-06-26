import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../services/studentApi'

export default function AddStudent() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    enrolledDate: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.enrolledDate) {
      setError('All fields are required.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      await addStudent(formData)
      navigate('/students')
    } catch (err) {
      setError('Failed to add student. Please try again.')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-container">
      <h2>Add Student</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="student-form">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enrolledDate" className="form-label">Enrolled Date</label>
          <input
            type="date"
            id="enrolledDate"
            name="enrolledDate"
            className="form-control"
            value={formData.enrolledDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-1" role="status" />
                Saving...
              </>
            ) : (
              'Submit'
            )}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/students')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
