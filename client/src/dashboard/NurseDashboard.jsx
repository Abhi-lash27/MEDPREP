import React from 'react'
import NurseNav from '../components/Navbar/Nurse-Nav'
import HeadBanner from '../components/Banner/HeadBanner'
import Info from '../pages/Nurse/Images/Info'
import img from '../pages/Nurse/Images/img6.jpg'
import NurseHero from '../components/Hero/NurseHero'
import {  useTranslation,Trans } from 'react-i18next';
import Footer from '../components/Footer/Footer'
const NurseDashboard = () => {
  const {t} = useTranslation()
  return (
    <div>
        <NurseNav />
        <br></br>
        <NurseHero/>
        <Info />
        <Footer/>
    </div>
  )
}

export default NurseDashboard