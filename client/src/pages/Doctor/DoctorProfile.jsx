import React from 'react'
import { useParams } from 'react-router-dom'
import DoctorNav from '../../components/Navbar/Doctor-Nav'
import HeadBanner from '../../components/Banner/HeadBanner'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSetting from '../../components/UserProfile/AccountSettings'
import './DoctorProfile.css'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import Notifications from '../../components/UserProfile/Notifications'
import Footer from '../../components/Footer/Footer'

const DoctorProfile = () => {

  const {activepage} = useParams()
  // alert(activepage)
  return (
    <div className='docprofile'>
      <DoctorNav/>
      <HeadBanner 
      bannerimage='https://source.unsplash.com/random?wallpapers'
      heading='My profile'
      />
      
      {/* DoctorProfile, Showing {activepage} */}

      <div className='docprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSetting/>}
          {activepage === 'changepassword' && <ChangePassword/> }
          {activepage === 'notify' && <Notifications/> }
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default DoctorProfile