import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './components/SignUp'
import DoctorDashboard from './dashboard/DoctorDashboard'
import NurseDashboard from './dashboard/NurseDashboard'
import PatientDashboard from './dashboard/PatientDashboard'
import NurseProfile from './components/Navbar/Nurse/NurseProfile'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/doctor' exact element={<DoctorDashboard />} />
          <Route path='/nurse' exact element={<NurseDashboard />} />
          <Route path='/nurse/profile' exact element={<NurseProfile />} />
          <Route path='/patient' exact element={<PatientDashboard />} />
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App