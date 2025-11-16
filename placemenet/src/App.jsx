import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import Student from './pages/Student'
import Admin from './pages/Admin'
import { Routes, Route } from "react-router-dom";
import ValidateOTP from './comps/ValidateOTP'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/student" element={<Student />} />
        <Route path="/admin" element={<Admin />} />
          <Route path="/validateotp" element={<ValidateOTP />} />
          <Route path="/login" element={<Login />} />
           <Route path="/createaccount" element={<CreateAccount />} />
    </Routes>
    </>
  )
}

export default App
