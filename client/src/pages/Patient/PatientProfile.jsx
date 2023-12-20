import React from 'react'
import { useParams } from 'react-router-dom'
import PatientNav from '../../components/Navbar/Patient-Nav'
import HeadBanner from '../../components/Banner/HeadBanner'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import './PatientProfile.css'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import Notifications from '../../components/UserProfile/Notifications'

const PatientProfile = () => {

  const {activepage} = useParams()
  // alert(activepage)
  return (
    <div className='patientprofile'>
      <PatientNav/>
      <HeadBanner 
      bannerimage='https://source.unsplash.com/random?wallpapers'
      heading='My profile'
      />
      
      {/* PatientProfile, Showing {activepage} */}

      <div className='patientprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings/>}
          {activepage === 'changepassword' && <ChangePassword/> }
          {activepage === 'notify' && <Notifications/> }
        </div>
      </div>
      </div>
  )
}

export default PatientProfile