import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PatientList from './pages/Nurse/PatientList'
import Home from './pages/Home'
import SignUp from './components/SignUp'
import DoctorDashboard from './dashboard/DoctorDashboard'
import NurseDashboard from './dashboard/NurseDashboard'

import PatientDashboard from './dashboard/PatientDashboard'
import PrevApp from './pages/Patient/PrevAppointment/PrevApp'
import PatientProfile from './pages/Patient/PatientProfile'
import PChangePassword from './components/UserProfile/Patient/PChangePassword'
import DoctorProfile from './pages/Doctor/DoctorProfile'
import NurseProfile from './pages/Nurse/NurseProfile'
import Book from './pages/Patient/BookAppointment/Book'
import Reports from './pages/Patient/Report.jsx/Reports'
import Prescription from './pages/Patient/Prescription/Prescription'
import Forgot from './components/Forgot'
import AddDoctor from './pages/Admin/AddDoctor'
import AdminDashboard from './dashboard/AdminDashboard'
import AddNurse from './pages/Admin/AddNurse'
import ListDoctor from './pages/Admin/ListDoctor'
import ListNurse from './pages/Admin/ListNurse'
import AppointmentDoc from './pages/Doctor/AppointmentDoc'
import PatientlistDoc from './pages/Doctor/PatientlistDoc'
import NChangePassword from './components/UserProfile/Nurse/NChangePassword'
import DoctorDetails from './pages/Patient/Dashboard/DoctorDetails'
import ViewDetails from './pages/Patient/Dashboard/view more/ViewDetails'
import Front from './pages/Patient/Dashboard/PatientDetails'
import PatientDetails from './pages/Patient/Dashboard/PatientDetails'
import Left from './pages/Patient/Dashboard/Left'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/doctor' exact element={<DoctorDashboard />} />
          <Route path='/nurse' exact element={<NurseDashboard />} />
          {/* Patient Dashboard */}
          <Route path='/patient' exact element={<PatientDetails/>} />

          {/* <Route path='/nurse/profile' exact element={<NurseProfile />} /> */}
          <Route path='/nurse/patientlist' exact element={<PatientList />} />
 
          <Route path='/patient/book' exact element={<Book />} />  
          <Route path='/patient/bookApp' exact element={<PatientDashboard/>}/>
          <Route path='/patient/prev' exact element={<PrevApp />} />  
          <Route path='/patient/Reports' exact element={<Reports/>} />  
          <Route path='/patient/:activepage' exact element={<PatientProfile/>} />
          <Route path='/patient/:activepage' exact element={<PChangePassword/>}/>
          {/* <Route path='/patient/Details' exact element={<PatientDetails/>}/> */}
          <Route path='/doctor/:activepage' exact element={<DoctorProfile />} />
          <Route path='/patient/prescription' exact element={<Prescription />} />
          <Route path='/patient/docinfo' exact element={<ViewDetails/>}/>

          <Route path='/Forgot' exact element={<Forgot/>}/>
          <Route path='/Admin/AddDoctor' exact element={<AddDoctor/>}/>
          <Route path='/Admin/AddNurse' exact element={<AddNurse/>}/>
          <Route path='/Admin' exact element={<AdminDashboard />}/>
          <Route path='/Admin/ListDoctor' exact element={<ListDoctor/>}/>
          <Route path='/Admin/ListNurse' exact element={<ListNurse/>}/>
          <Route path='/doctor/appointment' exact element={<AppointmentDoc/>}/>
          <Route path='/doctor/patients' exact element={<PatientlistDoc/>}/>
          <Route path='/nurse/:activepage' exact element={<NurseProfile/>} />
          <Route path='/nurse/:activepage' exact element={<NChangePassword/>} />
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App