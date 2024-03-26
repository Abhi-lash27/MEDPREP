

//1st page : Left->leftsidePanel, doctordetails->doclist

import React from 'react'
import './PatientDetails.css';
import DoctorDetails from './DoctorDetails';
import Left from './Left';
import PatientNav from '../../../components/Navbar/Patient-Nav';
import { useTranslation} from 'react-i18next'
import Footer from '../../../components/Footer/Footer';




const Front = () => {
  const {t} = useTranslation()

  return (
    <div>
<PatientNav/>
    
    <div className='front-m'>
           <Left/>
      
{/* 
    //    <div className='right'>
    //   <div className='top-r'>
    //     Calender 
    // </div>
    //   <div className='down-r'>
    //   <h2>Recent Searches</h2>
    //   <table className='recent'>
    //     <tbody  className='recent-b'>
    //       <tr className='recent-r'>
    //         <td  className='recent-d'>Sample A</td>
    //         </tr>
    //       <tr  className='recent-r'>
    //         <td  className='recent-d'>Blood Test</td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   </div>
    //   </div> */}
      
      <div className='mid'>
      <div className='wel'>
          <h2>{t('Looking for a Specialist ??')}</h2>
          {/* <p className='p'><i>Search Doctor By Name</i></p> */}
        </div>

        <div className='doc-list'>        
        <DoctorDetails/>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Front



