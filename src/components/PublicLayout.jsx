import { Outlet, useNavigate } from 'react-router-dom'

export default function PublicLayout() {
  const navigate = useNavigate()

  return (
    <div className="public-layout">
      {/* Fixed Header */}
      <header className="public-header">
        <div className="public-header-content">
          <h1>Welcome to Richmond Hill College</h1>
          <p>Your complete solution for student and course management</p>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="public-scrollable-content">
        <div className="public-content-wrapper">
          <Outlet />
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="public-footer">
        <div className="public-footer-content">
          <p>&copy; {new Date().getFullYear()} Richmond Hill College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
