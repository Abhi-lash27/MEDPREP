import React from 'react'


const ChangePassword = () => {
  return (
    <div className='accountsettings'>
      <h1 className='acnt-head'>Change Password</h1>
      <div className='form'>
        <div className='form-group'>
          <label>Old Password <span>*</span></label>
          <input type='password' name='pass' id='pass'/>
        </div>
        <div className='form-group'>
          <label>New Password <span>*</span></label>
          <input type='password' name='pass' id='pass'/>
        </div>
        <div className='form-group'>
          <label>Confirm Password <span>*</span></label>
          <input type='password' name='pass' id='pass'/>
        </div>
      </div>
      <button className='save-btn'>Save Changes</button>
    </div>
  )
}

export default ChangePassword