import React from 'react'
import DoctorNav from '../../components/Navbar/Doctor-Nav'
import HeadBanner from '../../components/Banner/HeadBanner'
import './AppointmentDoc.css'

const AppointmentDoc = () => {
  return (
    <div>
    <DoctorNav/>
    <HeadBanner  
    bannerimage='https://source.unsplash.com/random?wallpapers'
    heading='Appoitments'/>
    <div className='one'>
    <table className='tb'>
    <thead >
    <tr className='row'>
    <th className='head'>Name</th>
    <th className='head'>Date</th>
    <th className='head'>Time</th>
    <th className='head'>Reason</th>
    <th className='head'>Status</th>
    <th className='head'>Report</th>
    <th className='head'>Prescription</th>
    </tr>
    </thead>
    <tbody>
    <tr className='row'>
    <td className='data'> unknown</td>
    <td className='data'> Be</td>
    <td className='data'> BE</td>
    <td className='data'> unknown</td>
    <td className='data'> 
        <button className='btn-app'>Approve</button>
        <button className='btn-app'>Decline</button>
        </td>
    <td className='data'>
        <input type='file'></input>
        <button className='btn-app'>Upload</button>
    </td>
    <td className='data'>
        <input type='file'></input>
        <button className='btn-app'>Upload</button>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
     </div>
  )
}

export default AppointmentDoc