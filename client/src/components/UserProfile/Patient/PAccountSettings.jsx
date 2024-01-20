import React, { useEffect, useState } from 'react'
import './PAccountSettings.css'

  const PAccountSetting = () => {
  const [Name,setName] = useState('')
  const [PatientId,setPatientId] = useState('')
  const [ph,setPh] = useState('')
  const [email,setEmail] = useState('')
  const [Age,setAge] = useState('')
  const [Gender,setGender] = useState('')
  const [Dob,setDob] = useState('')
  const [blood,setBlood] = useState('')
  const [Ad,setAd] = useState('')
  const [disability,setDisability] = useState('')

  const handelclick = async() =>
  { 
    const reqbody = {Name,PatientId,email,Age,Gender,Dob,blood,Ad,disability,ph}
    const response = await fetch('http://localhost:3600/DB',
        {
          method:'POST',
          body:JSON.stringify(reqbody),
          headers:{'Content-Type':'application/json',
           }
        })
    
  } 
   
 

  return ( 
    <div className='accountsettings'>
      <h1 className='acnt-head'>Personal Information</h1>
      <div className='form'>

        <div className='form-group'>
          <label> Name <span>*</span></label>
          <input type='text' name='name' id='name' placeholder='Akalya' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>

        <div className='form-group'>
          <label>Patient ID <span>*</span></label>
          <input type='text' name='patientid' id='patientid' placeholder='1' value={PatientId} onChange={(e)=>{setPatientId(e.target.value)}}/>
        </div>
      
        <div className='form-group'>
          <label>Phone <span>*</span></label>
          <input type='text' name='phone' id='phone' placeholder='8148470771' value={ph} onChange={(e)=>{setPh(e.target.value)}}/>
        </div>

        <div className='form-group'>
          <label>Email <span>*</span></label>
          <input type='text' name='email' id='email' placeholder='akalyasubramaniane16@gmail.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className='form-group'>
          <label>Age <span>*</span></label>
          <input type='text' name='age' id='age' placeholder='20' value={Age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>

        <div className='form-group'>
          <label>Gender <span>*</span></label>
          <select value={Gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Prefer not to say</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Date Of Birth <span>*</span></label>
          <input type='date' name='dob' id='dob' placeholder='16/09/2003' value={Dob} onChange={(e)=>{setDob(e.target.value)}}/>
        </div>
          
        <div className='form-group'>
          <label>Blood Group <span>*</span></label>
          <input type='text' name='bg' id='bg' placeholder='A +ve' value={blood} onChange={(e) => {setBlood(e.target.value)}}/>
        </div>

        <div className='form-group'>
          <label>Aadhaar ID <span>*</span></label>
          <input type='text' name='aadhaar' id='aadhaar' placeholder='143524543265' value={Ad} onChange={(e) => {setAd(e.target.value)}}/>
        </div>

        <div className='form-group'>
          <label>Person with Disability <span>*</span></label>
          <input type='text' name='disability' id='disability' placeholder='none' value={disability} onChange={(e) => {setDisability(e.target.value)}}/>
        </div>
        
      </div>
      <button className='save-btn' onClick={handelclick}>Update Changes</button>
    </div>
  )
} 

export default PAccountSetting