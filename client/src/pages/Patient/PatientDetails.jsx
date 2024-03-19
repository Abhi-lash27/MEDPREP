import React from 'react'
import './PatientDetails.css'
import img from '../Nurse/Images/img3.jpg'
import PatientNav from '../../components/Navbar/Patient-Nav'
import { useState,useEffect } from 'react'
import { useTranslation,Trans } from 'react-i18next'


const PatientDetails = () => {
    const {t} = useTranslation()
    const [Data,setData] = useState(null)
    useEffect( async() => 
    {
      const response = await fetch('http://localhost:2222/api/patients/c361d2fa-8e6d-4a4d-9fa6-041690ab9b27')
      const json = await response.json()
      console.log(json)
      if(response.ok)
      {
        setData(json)
        console.log(json)
      }
    },[])

    return (
    <div className='main'>
        <PatientNav />
    <div className="container_profile">
      <div className="box">
        <img src={img} alt="" />
        <table id ='info'>
            {Data && ( 
            <tbody>
            <tr>
             <td>{t('Name')}</td>
             <td>: {Data.fullName}</td>
            </tr>
            <tr>
             <td>{t('email')}</td>
             <td id='right'>: {Data.email}</td>
            </tr>
            <tr>
             <td>{t("phone")}</td>
             <td>: {Data.phone}</td>
            </tr>
            <tr>
             <td>{t("BloodGroup")}</td>
             <td>: {Data.bloodGroup}</td>
            </tr>
            <tr>
             <td>{t('dob')}</td>
             <td>: {Data.dob}</td>
            </tr>
          </tbody> 
            )} 
      </table>
      </div>
      <div className="About">  
      <h2>
         {t('RecentlyAccessedFiles')}
      </h2>
      <div className='container-details'>
        <table className='table-details'>
          <tbody>
          <tr className='row-details'>
            <td className='td-details'>A sample</td>
          </tr>
          <tr className='row-details'><td className='td-details'>B Sample</td></tr>
          <tr className='row-details'><td className='td-details'>C Sample</td></tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </div>
  )
}

export default PatientDetails
