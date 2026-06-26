import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AgGridReact, AgGridProvider } from 'ag-grid-react'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { fetchStudents } from '../services/studentApi'

export default function Students() {
  const [rowData, setRowData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const gridRef = useRef()

  const loadStudents = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchStudents()
      setRowData(data)
    } catch (err) {
      setError('Failed to load students. Is the API server running?')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadStudents()
  }, [loadStudents])

  const colDefs = [
    { field: 'studentId', headerName: 'Student ID', width: 130 },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    {
      field: 'enrolledDate',
      headerName: 'Enrolled Date',
      width: 180,
      valueFormatter: (p) => p.value ? new Date(p.value).toLocaleDateString() : '',
    },
  ]

  return (
    <div className="page-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Students</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/students/add')}
        >
          + Add Student
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading students...</p>
        </div>
      ) : (
        <AgGridProvider modules={[AllCommunityModule]}>
        <div className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={colDefs}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 50]}
            domLayout="autoHeight"
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
            }}
            suppressCellFocus={true}
          />
        </div>
        </AgGridProvider>
      )}
    </div>
  )
}
