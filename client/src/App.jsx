import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './components/SignUp'
import DoctorDashboard from './dashboard/DoctorDashboard'
import NurseDashboard from './dashboard/NurseDashboard'
import PatientDashboard from './dashboard/PatientDashboard'
<<<<<<< Updated upstream
=======
import DoctorProfile from './pages/Doctor/DoctorProfile'
>>>>>>> Stashed changes

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/doctor' exact element={<DoctorDashboard />} />
          <Route path='/nurse' exact element={<NurseDashboard />} />
<<<<<<< Updated upstream
=======
          <Route path='/doctor/:activepage' exact element={<DoctorProfile/>} />
>>>>>>> Stashed changes
          <Route path='/patient' exact element={<PatientDashboard />} />
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App