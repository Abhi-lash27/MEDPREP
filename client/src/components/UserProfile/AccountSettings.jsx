import React from 'react'
import './AccountSettings.css'

const AccountSetting = () => {
  return (
    <div className='accountsettings'>
      <h1 className='acnt-head'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label>Your Name <span>*</span></label>
          <input type='text' className='input-doc' name='name' id='name'/>
        </div>
        <div className='form-group'>
          <label>Specialization <span>*</span></label>
          <input type='text' className='input-doc' name='spec' id='spec'/>
        </div>
        <div className='form-group'>
          <label>Phone <span>*</span></label>
          <input type='text' className='input-doc' name='phone' id='phone'/>
        </div>
        <div className='form-group'>
          <label>Email <span>*</span></label>
          <input type='text' className='input-doc' name='email' id='email'/>
        </div>
        <div className='form-group'>
          <label>Date of Join <span>*</span></label>
          <input type='date' className='input-doc' name='doj' id='doj'/>
        </div>
        <div className='form-group'>
          <label>Experience <span>*</span></label>
          <input type='text' className='input-doc' name='exp' id='exp'/>
        </div>
        
      </div>
      <button className='save-btn'>Update Changes</button>
    </div>
  )
} 

export default AccountSetting