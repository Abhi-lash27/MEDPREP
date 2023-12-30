import React from 'react'
import './PatientDetails.css'
import img from '../Nurse/Images/img3.jpg'
import PatientNav from '../../components/Navbar/Patient-Nav'
import { useState,useEffect } from 'react'

const PatientDetails = () => {
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
             <td>Name</td>
             <td>: {Data.DB.Name}</td>
            </tr>
            <tr>
             <td>Age</td>
             <td id='right'>: {Data.DB.Age}</td>
            </tr>
            <tr>
             <td>Gender</td>
             <td>: {Data.DB.Gender}</td>
            </tr>
            <tr>
             <td>Email</td>
             <td>:{Data.DB.email}</td>
            </tr>
            <tr>
             <td>Blood</td>
             <td>: {Data.DB.blood}</td>
            </tr>
            <tr>
             <td>ph</td>
             <td>: {Data.DB.ph}</td>
            </tr>
          </tbody> 
            )} 
      </table>
      </div>
      <div className="About">  
      </div>
    </div>
    </div>
  )
}

export default PatientDetails
