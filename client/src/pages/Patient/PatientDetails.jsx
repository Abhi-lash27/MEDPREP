import React from 'react'
import './PatientDetails.css'
import img from '../Nurse/Images/img3.jpg'
import PatientNav from '../../components/Navbar/Patient-Nav'
import { useState,useEffect } from 'react'
import { useTranslation,Trans } from 'react-i18next'


const PatientDetails = () => {
    const {t} = useTranslation()
    const [Data,setData] = useState('')
    useEffect( async() => 
    {
      const response = await fetch('http://localhost:3600/DB')
      const json = await response.json()
      console.log(json)
      if(response.ok)
      {
        setData(json)
        console.log()
      }
    },[])

    return (
    <div className='main'>
        <PatientNav />
    <div className="container_profile">
      <div className="box">
        <img src={img} alt="" />
        <table id ='info'>
            {Data && Data.DB && ( 
            <tbody>
            <tr>
             <td>{t('Name')}</td>
             <td>: {Data.DB.Name}</td>
            </tr>
            <tr>
             <td>{t('Age')}</td>
             <td id='right'>: {Data.DB.Age}</td>
            </tr>
            <tr>
             <td>{t("Gender")}</td>
             <td>: {Data.DB.Gender}</td>
            </tr>
            <tr>
             <td>{t("Email")}</td>
             <td>:{Data.DB.email}</td>
            </tr>
            <tr>
             <td>{t("BloodGroup")}</td>
             <td>: {Data.DB.blood}</td>
            </tr>
            <tr>
             <td>{t('PhoneNumber')}</td>
             <td>: {Data.DB.ph}</td>
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
