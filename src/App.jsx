import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import PublicLayout from './components/PublicLayout'
import Layout from './components/Layout'
import PublicHomePage from './pages/PublicHomePage'
import Introduction from './pages/Introduction'
import Fee from './pages/Fee'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import TeacherClasses from './pages/TeacherClasses'
import UpdateInvoiceCredit from './pages/UpdateInvoiceCredit'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes - no auth needed */}
        <Route element={<PublicLayout />}>
          <Route index element={<PublicHomePage />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="fee" element={<Fee />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Protected routes - require login */}
        <Route path="/portal" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="students" element={<Students />} />
          <Route path="students/add" element={<AddStudent />} />
          <Route path="teacher-classes" element={<TeacherClasses />} />
          <Route path="update-invoice-credit" element={<UpdateInvoiceCredit />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
