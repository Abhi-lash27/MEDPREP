import React from 'react'
import { useParams } from 'react-router-dom'
import NurseNav from '../../components/Navbar/Nurse-Nav'
import HeadBanner from '../../components/Banner/HeadBanner'
import NUserSidebar from '../../components/UserProfile/Nurse/NUserSidebar'
import NAccountSetting from '../../components/UserProfile/Nurse/NAccountSettings'
import './NurseProfile.css'
import NChangePassword from '../../components/UserProfile/Nurse/NChangePassword'
import Footer from '../../components/Footer/Footer'

const NurseProfile = () => {

  const {activepage} = useParams()
  // alert(activepage)
  return (
    <div className='nurprofile'>
      <NurseNav/>
      <HeadBanner 
      bannerimage='https://source.unsplash.com/random?wallpapers'
      heading='My profile'
      />
      
      {/* DoctorProfile, Showing {activepage} */}

      <div className='nurprofilein'>
        <div className='left'>
          <NUserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <NAccountSetting/>}
          {activepage === 'changepassword' && <NChangePassword/> }
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default NurseProfile