import React from 'react'
import './PAccountSettings.css'

const PAccountSetting = () => {
  return ( 
    <div className='accountsettings'>
      <h1 className='acnt-head'>Personal Information</h1>
      <div className='form'>

        <div className='form-group'>
          <label> Name <span>*</span></label>
          <input type='text' name='name' id='name'/>
        </div>

        <div className='form-group'>
          <label>Patient ID <span>*</span></label>
          <input type='text' name='patientid' id='patientid'/>
        </div>
      
        <div className='form-group'>
          <label>Phone <span>*</span></label>
          <input type='text' name='phone' id='phone'/>
        </div>

        <div className='form-group'>
          <label>Email <span>*</span></label>
          <input type='text' name='email' id='email'/>
        </div>

        <div className='form-group'>
          <label>Age <span>*</span></label>
          <input type='text' name='age' id='age'/>
        </div>

        <div className='form-group'>
          <label>Gender <span>*</span></label>
          <select >
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Prefer not to say</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Date Of Birth <span>*</span></label>
          <input type='date' name='dob' id='dob'/>
        </div>
          
        <div className='form-group'>
          <label>Blood Group <span>*</span></label>
          <input type='text' name='bg' id='bg'/>
        </div>

        <div className='form-group'>
          <label>Aadhaar ID <span>*</span></label>
          <input type='text' name='aadhaar' id='aadhaar'/>
        </div>

        <div className='form-group'>
          <label>Person with Disability <span>*</span></label>
          <input type='text' name='disability' id='disability'/>
        </div>
        

      </div>
      <button className='save-btn'>Update Changes</button>
    </div>
  )
} 

export default PAccountSetting