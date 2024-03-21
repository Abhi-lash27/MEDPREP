import React from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  return (
    <div className='changepassword'>
      <h1 className='acnt-head'>Change Password</h1>
      <div className='form'>
        <div className='form-group'>
          <label>Old Password <span>*</span></label>
          <input type='password' name='oldPassword' id='oldPassword' />
        </div>
        <div className='form-group'>
          <label>New Password <span>*</span></label>
          <input type='password' name='newPassword' id='newPassword' />
        </div>
        <div className='form-group'>
          <label>Confirm Password <span>*</span></label>
          <input type='password' name='confirmPassword' id='confirmPassword' />
        </div>
      </div>
      <button className='save-btn'>Save Changes</button>
    </div>
  );
};

export default ChangePassword;
