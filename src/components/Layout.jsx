import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app-layout">
      {/* Header */}
      <header className="app-header">
        <img src="/school_logo.jpg" alt="School Logo" className="school-logo" />
        <h1>Richmond Hill College</h1>
      </header>

      <div className="app-body">
        {/* Left Navigation */}
        <nav className="app-nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/students">Students</NavLink></li>
            <li><NavLink to="/teacher-classes">Teacher &amp; Classes</NavLink></li>
            <li><NavLink to="/update-invoice-credit">Update Invoice Credit</NavLink></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="app-content">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        &copy; {new Date().getFullYear()} Richmond Hill College. All rights reserved.
      </footer>
    </div>
  )
}
