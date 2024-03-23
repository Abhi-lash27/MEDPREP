import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './ChangePassword.css';

const ChangePassword = () => {
  const { t } = useTranslation();

  return (
    <div className='accountsettings'>

      {/* change Password */}
      <h1 className='acnt-head'>
      <Trans i18nKey="change">Change Password  </Trans>
      </h1>
    
      <div className='form'>
        <div className='form-group'>
          <label>
          <Trans i18nKey="old">Old Password</Trans>
          <span>*</span></label>
          <input type='password' name='pass' id='pass'/>
        </div>
        <div className='form-group'>
          <label>
          <Trans i18nKey="newpass">New Password </Trans>
          <span>*</span></label>
          <input type='password' name='pass' id='pass'/>
        </div>
        <div className='form-group'>
          <label>
          <Trans i18nKey="confirm">Confirm Password</Trans>
          <span>*</span></label>
          <input type='password' name='pass' id='pass'/>
        </div>
    <div className='changepassword'>
      <h1 className='acnt-head'>Change Password</h1>
      <div className='form'>
        <div className='form-group'>
          <label>Old Password <span>*</span></label>
          <input type='password' name='oldPassword' id='oldPassword' />
        </div>
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
      <button className='save-btn'>
      <Trans i18nKey="save">Save Changes</Trans>
      </button>
    </div>
    </div>
    
  );
};

export default ChangePassword;
