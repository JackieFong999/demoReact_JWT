import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="students" element={<Students />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route path="teacher-classes" element={<TeacherClasses />} />
        <Route path="update-invoice-credit" element={<UpdateInvoiceCredit />} />
      </Route>
    </Routes>
  )
}

export default App
