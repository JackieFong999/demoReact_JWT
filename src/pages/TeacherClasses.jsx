import { useState, useEffect, useCallback, useRef } from 'react'
import { AgGridReact, AgGridProvider } from 'ag-grid-react'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { fetchTeacherClasses } from '../services/teacherClassApi'

export default function TeacherClasses() {
  const [rowData, setRowData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const gridRef = useRef()

  const loadData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchTeacherClasses()
      setRowData(data)
    } catch (err) {
      setError('Failed to load teacher class data. Is the API server running?')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  const colDefs = [
    { field: 'studentId', headerName: 'Student ID', width: 130 },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'classId', headerName: 'Class ID', width: 110 },
    { field: 'className', headerName: 'Class Name', flex: 1 },
  ]

  return (
    <div className="page-container">
      <h2>Teacher &amp; Class Assignments</h2>
      <p className="text-muted">
        View of student enrollments across classes.
      </p>

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
          <p className="mt-2">Loading data...</p>
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
