import React from 'react'
import './AccountSettings.css'

const AccountSetting = () => {
  return (
    <div className='accountsettings'>
      <h1 className='acnt-head'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label>Your Name <span>*</span></label>
          <input type='text' name='name' id='name'/>
        </div>
        <div className='form-group'>
          <label>Specialization <span>*</span></label>
          <input type='text' name='spec' id='spec'/>
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
          <label>Date of Join <span>*</span></label>
          <input type='date' name='doj' id='doj'/>
        </div>
        <div className='form-group'>
          <label>Experience <span>*</span></label>
          <input type='text' name='exp' id='exp'/>
        </div>
        
      </div>
      <button className='save-btn'>Update Changes</button>
    </div>
  )
} 

export default AccountSetting