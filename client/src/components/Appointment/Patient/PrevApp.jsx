import React from 'react';
import './PrevApp.css';

const PrevApp = ({ appointments }) => {
  return (
    <div className='container'>
      <h2>Previous Appointments</h2>
      <table className='tbl'>
        <thead >
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Scheduled Date</th>
            <th>Scheduled Time</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td data-label="Name">{appointment.name}</td>
              <td data-label="Phone Number">{appointment.phnno}</td>
              <td data-label="Date">{appointment.selectedDate}</td>
              <td data-label="Time">{appointment.selectedTimeLabel}</td>
              <td data-label="response">{appointment.reason}</td>
            </tr>
          ))}
          <tr>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>

          </tr>
          <tr>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>
            <td>Agjfyjkkj</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrevApp;
