import {React,useState} from 'react'
// import img from './doc.jpg';
import { useNavigate } from 'react-router-dom';
import { useTranslation,Trans } from 'react-i18next'




const Left = () => {
  const PatDetails=[
    {
        patProfile:'https://th.bing.com/th/id/OIP.WPYPa4GubQVLa0kQqXcfvwHaHa?w=179&h=180&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7',
        patId:'E1010',
        patName:'Abcd',
        patPhoneNo:'9876604321',
        patEmail:"abc@gmail.com",
        patDob:"12-09-2003",
        patAge:"21",
        patBg:"A+ve",
        patAadhar:"505416968153",
    }
  ];

  const [pInfo, setPInfo] = useState([...PatDetails]);
  const navigate= useNavigate();
  const {t} = useTranslation()


  return (
    <div>
              {pInfo.map((pat,index) =>(

              <div className='left'>
          <div className={t('patient-info')}>
            <h2>{t('Patient Details')}</h2>
             <img src={pat.patProfile} className='img-1'/>
            <table className='info'>
              <tbody >
              <tr className='row-f'>
                  <td className='row-l'>{t('Patient Id')}</td>
                  <td className='row-d'>{pat.patId}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l'>{t('Name:')}</td>
                  <td className='row-d'>{pat.patName}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l'>{t('Phone Number:')}</td>
                  <td className='row-d'>{pat.patPhoneNo}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l' >{t('Email:')}</td>
                  <td className='row-d' >{pat.patEmail}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l'>{t('DOB:')}</td>
                  <td className='row-d'>{pat.patDob}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l'>{t('Age:')}</td>
                  <td className='row-d'>{pat.patAge}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l'>{t('Blood Group:')}</td>
                  <td className='row-d'>{pat.patBg}</td>
                </tr>
                <tr className='row-f'>
                  <td className='row-l'>{t('Aadhar ID:')}</td>
                  <td className='row-d'>{pat.patAadhar}</td>
                </tr>

              </tbody>
              </table>
              </div> 

    </div>
      ))}
    </div>
  )
}

export default Left