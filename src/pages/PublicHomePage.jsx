import { useNavigate } from 'react-router-dom'

export default function PublicHomePage() {
  const navigate = useNavigate()

  return (
    <>
      <div className="feature-section">
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>Student Management</h3>
          <p>Manage student records with advanced features including search, add, update, and delete capabilities</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👨‍🏫</div>
          <h3>Teacher &amp; Classes</h3>
          <p>Complete teacher and class management system for organizing academic resources</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Access</h3>
          <p>Role-based access control and JWT authentication for secure data management</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Invoice Management</h3>
          <p>Track and manage invoices with credit updates and comprehensive reporting tools</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📝</div>
          <h3>Easy Registration</h3>
          <p>Streamlined student registration process with automated validation and data management</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Real-time Updates</h3>
          <p>Instant data synchronization and real-time updates across all management modules</p>
        </div>
      </div>

      <div className="button-section">
        <button onClick={() => navigate('/introduction')} className="btn-public btn-introduction">
          Introduction
        </button>
        <button onClick={() => navigate('/fee')} className="btn-public btn-fee">
          Fee
        </button>
        <button onClick={() => navigate('/login')} className="btn-public btn-login">
          Login
        </button>
      </div>
    </>
  )
}
