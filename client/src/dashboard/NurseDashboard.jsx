import React from 'react'
import NurseNav from '../components/Navbar/Nurse-Nav'
import HeadBanner from '../components/Banner/HeadBanner'
import Info from '../pages/Nurse/Images/Info'
import img from '../pages/Nurse/Images/img6.jpg'
import {  useTranslation,Trans } from 'react-i18next';
const NurseDashboard = () => {
  const {t} = useTranslation()
  return (
    <div>
        <NurseNav />
        <br></br>
        <HeadBanner
        bannerimage={img}
        heading={t('nurse')} 
        />
        <Info />
    </div>
  )
}

export default NurseDashboard