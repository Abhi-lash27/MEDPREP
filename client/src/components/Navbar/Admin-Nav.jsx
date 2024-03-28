import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css'
import Logo from '../Asset/medrep.jpg';
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const AdminNav = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setSelectedLanguage(selectedLang);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    window.location.replace('/')
    toast.success("Logout Successfull")
  }

  return (
    <div className='admin-navbar'>
      <div className="admin-navbar-logo">
        <img src={Logo} alt="" />
      </div>
      
      <ul className="admin-navbar-list">
        <li><Link style={{textDecoration:'none', color:'black'}} to='/Admin/AddDoctor'>{t('Add Doctor')}</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/Admin/AddNurse'>{t('Add Nurse')}</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/Admin/ListDoctor'>{t('Doctor List')}</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/Admin/ListNurse'>{t('Nurse List')}</Link></li>
        <li onClick={handleLogout}><Link style={{textDecoration:'none',color:'black'}} to='/'>{t('Logout')}</Link></li>
        <select className='language-selector' onChange={handleChange} value={selectedLanguage}>
          <option value="en">{t('English')}</option>
          <option value="tn">{t('Tamil')}</option>
          <option value="fr">{t('French')}</option>
          <option value='hi'>{t('Hindi')}</option>
        </select>
      </ul>
    </div>
  )
}

export default AdminNav;

