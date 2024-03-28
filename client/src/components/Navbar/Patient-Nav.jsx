import { Link } from 'react-router-dom'
import './PatientNav.css'
import Logo from '../Asset/medrep.jpg'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const PatientNav = () => {

  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('patient-token');
    window.location.replace('/')
    toast.success("Logout Successfull")
  }
  const { t } = useTranslation();
  const navigate= useNavigate();


  return (
    <div className='patient-navbar'>
      <div className="patient-navbar-logo">
      <img src={Logo} alt="" onClick={()=>navigate('/patient/details')}  />
      </div>
      
      <ul className="patient-navbar-list">
        <li><Link style={{textDecoration:'none', color:'black'}} to='/patient'>Home</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/patient/bookapp'>Book Appointment</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/patient/prev'>Previous Appointments</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/patient/reports'>Reports</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/patient/prescription'>Prescription</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/patient/accountsettings'>Profile</Link></li>
        <li onClick={handleLogout}><Link style={{textDecoration:'none',color:'black'}} to='/'>Logout</Link></li>
        <select className='language-selector'  onChange={handleChange}>
        <option value="en">English</option>
        <option value="tn">Tamil</option>
        <option value="fr">French</option>
        <option value="hi">Hindi</option>
      </select>
      </ul>
    </div>
  )
}

export default PatientNav

