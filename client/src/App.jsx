import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './components/SignUp'
import DoctorDashboard from './dashboard/DoctorDashboard'
import NurseDashboard from './dashboard/NurseDashboard'
import PatientDashboard from './dashboard/PatientDashboard'

import PatientProfile from './pages/Patient/PatientProfile'
import PChangePassword from './components/UserProfile/Patient/PChangePassword'
import PNotifications from './components/UserProfile/Patient/PNotifications'
import DoctorProfile from './pages/Doctor/DoctorProfile'
import NurseProfile from './components/Navbar/Nurse/NurseProfile'
import Main from './components/Appointment/Patient/Main'


import PatientProfile from './pages/Patient/PatientProfile'
import PChangePassword from './components/UserProfile/Patient/PChangePassword'
import PNotifications from './components/UserProfile/Patient/PNotifications'


import DoctorProfile from './pages/Doctor/DoctorProfile'
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
          <Route path='/nurse/patient' exact element={<Patient />} />
          <Route path='/patient' exact element={<PatientDashboard />} />
          <Route path='/patient/:activepage' exact element={<PatientProfile/>} />
          <Route path='/patient/:activepage' exact element={<PChangePassword/>}/>
          <Route path='/doctor/:activepage' exact element={<DoctorProfile />} />
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App