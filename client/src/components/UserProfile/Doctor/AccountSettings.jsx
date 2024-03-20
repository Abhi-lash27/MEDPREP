import React, { useState,useEffect } from 'react';
import './AccountSettings.css';

const AccountSetting = () => {
  // Sample data
  const [Data, setData] = useState({
    name: 'John Doe',
    specialization: 'Cardiologist',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    dateOfJoin: '2020-01-01',
    experience: '5 years',
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:2222/api/doctors/d1377869-5f26-43a9-a93f-6e060fcb5f0f');
  //       if (response.ok) {
  //         const json = await response.json();
  //         setData(json.doctors);
  //         console.log(json.doctors);
  //       } else {
  //         console.error('Error:', response.status, response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='accountsettings'>
      <h1 className='acnt-head'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label>Your Name <span>*</span></label>
          <input type='text' className='input-doc' name='name' id='name' value={Data.name} readOnly />
        </div>
        <div className='form-group'>
          <label>Specialization <span>*</span></label>
          <input type='text' className='input-doc' name='spec' id='spec' value={Data.specialization} readOnly />
        </div>
        <div className='form-group'>
          <label>Phone <span>*</span></label>
          <input type='text' className='input-doc' name='phone' id='phone' value={Data.phone} readOnly />
        </div>
        <div className='form-group'>
          <label>Email <span>*</span></label>
          <input type='text' className='input-doc' name='email' id='email' value={Data.email} readOnly />
        </div>
        <div className='form-group'>
          <label>Date of Join <span>*</span></label>
          <input type='date' className='input-doc' name='doj' id='doj' value={Data.dateOfJoin} readOnly />
        </div>
        <div className='form-group'>
          <label>Experience <span>*</span></label>
          <input type='text' className='input-doc' name='exp' id='exp' value={Data.experience} readOnly />
        </div>
      </div>
      <button className='save-btn'>Update Changes</button>
    </div>
  );
};

export default AccountSetting;
