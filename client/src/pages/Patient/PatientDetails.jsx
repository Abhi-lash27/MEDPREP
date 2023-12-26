import React from 'react'
import './PatientDetails.css'
import img from '../Nurse/Images/img3.jpg'
import PatientNav from '../../components/Navbar/Patient-Nav'

const PatientDetails = () => {
    const Data = {"Patient_id":"1","Name":"Akalya","Age":"20","Gender":"Female","Email":"akalyasubramaniane16@gmail.com","Blood":"o+ve","ph":"1234567890"}
  return (
    <div className='main'>
        <PatientNav />
    <div className="container_profile">
      <div className="box">
        <img src={img} alt="" />
        <table id ='info'>
            <tr>
             <td>Name</td>
             <td>: {Data.Name}</td>
            </tr>
            <tr>
             <td>Age</td>
             <td id='right'>: {Data.Age}</td>
            </tr>
            <tr>
             <td>Gender</td>
             <td>: {Data.Gender}</td>
            </tr>
            <tr>
             <td>Email</td>
             <td>: {Data.Gender}</td>
            </tr>
            <tr>
             <td>Blood</td>
             <td>: {Data.Blood}</td>
            </tr>
            <tr>
             <td>ph</td>
             <td>: {Data.ph}</td>
            </tr>
      </table>
      </div>
      <div className="About">  
      </div>
    </div>
    </div>
  )
}

export default PatientDetails
