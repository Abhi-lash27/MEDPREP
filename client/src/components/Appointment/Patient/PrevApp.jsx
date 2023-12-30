import React, { useEffect } from 'react';
import './PrevApp.css';
import '../Patient/Hooks/UseBookContext'
import { useBookContext } from '../Patient/Hooks/UseBookContext';
import PatientNav from '../../Navbar/Patient-Nav'
const PrevApp = () => {
  const {Appointment,dispatch} = useBookContext()
  useEffect(async() =>
  {
    const response = await fetch('http://localhost:3500/Data')
    if(response.ok)
    {
    const json = await response.json()
    dispatch({type:'SET_APPOINTMENT',payload:json})
    }
  },[]
  )
 
  return (
    <div>
      <PatientNav></PatientNav>
      <br></br>
      <div className='container-p' >
<h1 className='heading'>Previous Appointment</h1>
<br></br>
{
   <div className='one'>
  <table className='tb'>
  <thead >
  <tr className='row'>
    <th className='head'>Name</th>
    <th className='head'>Phone</th>
    <th className='head'>Date</th>
    <th className='head'>Time</th>
    <th className='head'>Doctor</th>
    <th className='head'>Reason</th>

  </tr>
  </thead>
  <tbody>
  {
  Appointment.map((value) => 
  <tr className='row'>
   <td className='data'> {value.Name}</td>
   <td className='data'> {value.ph}</td>
   <td className='data'> {value.Date}</td>
   <td className='data'> {value.Time}</td>
   <td className='data'> {value.doc}</td>
   <td className='data'> {value.reason}</td>
  </tr>
 
  )}
   </tbody>

</table>
</div>}

    </div>
    </div>
  );
};

export default PrevApp;
