import React from 'react'
import NurseNav from '../components/Navbar/Nurse-Nav'
import HeadBanner from '../components/Banner/HeadBanner'
import Info from '../pages/Nurse/Images/Info'
import img from '../pages/Nurse/Images/img6.jpg'
const NurseDashboard = () => {
  return (
    <div>
        <NurseNav />
        <br></br>
        <HeadBanner
        bannerimage={img}
        heading='Nurse Home Page' 
        />
        <Info />
    </div>
  )
}

export default NurseDashboard