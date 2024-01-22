import React from 'react'

import DoctorNav from '../components/Navbar/Doctor-Nav'
import HeadBanner from '../components/Banner/HeadBanner'
import Footer from '../components/Footer/Footer'

import { Trans } from 'react-i18next'

const DoctorDashboard = () => {
  return (
    <div>
        <DoctorNav />
        <HeadBanner  
        bannerimage='https://source.unsplash.com/random?wallpapers'
        heading='WELCOME'/>
        <div className='doc-dash'>
        <h1 style={{fontSize:'50px'}}>
        Responsibilities for Doctor
        </h1>
       
        <h2 style={{fontFamily:'cursive',fontSize:'35px'}}>
        1.Medical Advice and Prescriptions:
        </h2>
        <p style={{fontFamily:'cursive',fontSize:'25px'}}>
        Provide medical advice to patients and address their concerns.<br/>
        Prescribe medications and issue electronic prescriptions.
        </p>

        <h2 style={{fontFamily:'cursive',fontSize:'35px'}}>
        2.Medical Records Management:
        </h2>
        <p style={{fontFamily:'cursive',fontSize:'25px'}}>
        Maintain accurate and up-to-date electronic medical records for each patient.<br/>
        Document medical histories, diagnoses, treatments, and prescriptions.
        </p>

        <h2 style={{fontFamily:'cursive',fontSize:'35px'}}>
        3.Preserving Patient Privacy:
        </h2>
        <p style={{fontFamily:'cursive',fontSize:'25px'}}>
        Adhere to strict privacy and security protocols to protect patient information.<br/>
        Ensure compliance with healthcare data protection regulations.
        </p>

        <h2 style={{fontFamily:'cursive',fontSize:'35px'}}>
        4.Feedback and Improvement:
        </h2>
        <p style={{fontFamily:'cursive',fontSize:'25px'}}>
        Seek feedback from patients regarding their online healthcare experience.<br/>
        Contribute to the improvement of the eHospital platform by providing insights and suggestions.
        </p>

        </div>
        <Footer/>
        </div>
  )
}

export default DoctorDashboard