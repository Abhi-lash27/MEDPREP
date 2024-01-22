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
    
<h1>Previous Appointment</h1>
<br></br>
{<table id="patient">
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Date</th>
    <th>Time</th>
    <th>Doctor</th>
    <th>Reason</th>

  </tr>
  {Appointment.map((value) => 
  <tr>
   <td> {value.Name}</td>
   <td> {value.ph}</td>
   <td> {value.Date}</td>
   <td> {value.Time}</td>
   <td> {value.doc}</td>
   <td> {value.reason}</td>
  </tr>)}
</table>}
    </div>
  );
};

export default PrevApp;
