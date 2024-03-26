import React from 'react'
import { useParams } from 'react-router-dom'
import PatientNav from '../../components/Navbar/Patient-Nav'
import HeadBanner from '../../components/Banner/HeadBanner'
import UserSideBar from '../../components/UserProfile/Patient/PUserSideBar'
// import UserSidebar from "../../components/UserProfile/UserSidebar";
import AccountSettings from '../../components/UserProfile/Patient/PAccountSettings'
import './PatientProfile.css'
import ChangePassword from '../../components/UserProfile/Patient/PChangePassword'

const PatientProfile = () => {

  const {activepage} = useParams()
  // alert(activepage)
  return (
    <div className='patientprofile'>
      <PatientNav/>
      <HeadBanner 
      bannerimage='https://resources.jamf.com/images/photos/healthcare-cybersecurity.jpg'
      heading='My profile'
      />
      
      {/* PatientProfile, Showing {activepage} */}

      <div className='patientprofilein'>
        <div className='left'>
          <UserSideBar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings/>}
          {activepage === 'changepassword' && <ChangePassword/> }
        </div>
      </div>
      </div>
  )
}

export default PatientProfile