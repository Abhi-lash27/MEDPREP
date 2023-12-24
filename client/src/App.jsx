import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Patient from './pages/Nurse/Patient'
import Home from './pages/Home'
import SignUp from './components/SignUp'
import DoctorDashboard from './dashboard/DoctorDashboard'
import NurseDashboard from './dashboard/NurseDashboard'
import PatientDashboard from './dashboard/PatientDashboard'
<<<<<<< HEAD
import PatientProfile from './pages/Patient/PatientProfile'
import PChangePassword from './components/UserProfile/Patient/PChangePassword'
import PNotifications from './components/UserProfile/Patient/PNotifications'

=======
import DoctorProfile from './pages/Doctor/DoctorProfile'
import NurseProfile from './components/Navbar/Nurse/NurseProfile'
>>>>>>> 8b7b6e9c1c780d343c9444ba23c8047aab61d602

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
<<<<<<< HEAD
          <Route path='/patient/:activepage' exact element={<PatientProfile/>} />
          <Route path='/patient/:activepage' exact element={<PChangePassword/>}/>
=======
          <Route path='/doctor/:activepage' exact element={<DoctorProfile />} />
>>>>>>> 8b7b6e9c1c780d343c9444ba23c8047aab61d602
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App