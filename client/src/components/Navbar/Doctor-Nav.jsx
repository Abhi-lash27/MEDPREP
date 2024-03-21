import React from 'react'
import { Link } from 'react-router-dom'
import './DoctorNav.css'
import Logo from '../Asset/medrep.jpg'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const DoctorNav = () => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div className='doctor-navbar'>
      <div className="doctor-navbar-logo">
      <img src={Logo} alt="" />
      </div>
      
      <ul className="doctor-navbar-list">
        <li><Link style={{textDecoration:'none', color:'black'}} to='/doctor'>Home</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/doctor/appointment'>Appointments</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/doctor/patients'>Patients</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/doctor/accountsettings'>Profile</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Logout</Link></li>
        <select className='language-selector' onChange={handleChange}>
        <option value="en">English</option>
        <option value="tn">Tamil</option>
        <option value="fr">French</option>
        <option value='hi'>Hindi</option>
      </select>
      </ul>
    </div>
  )
}

export default DoctorNav
