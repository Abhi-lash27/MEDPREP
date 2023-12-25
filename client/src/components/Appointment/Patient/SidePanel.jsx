// SidePanel.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SidePanel.css';

function SidePanel() {
  return (
    <div className='side-panel'>
      <ul className='side-ul'>
        <li className='side-item'>
          <Link to='/patient/book'>
            Book Appointment
          </Link>
        </li>
        <li className='side-item'>
          <Link to='/patient/prev' >
            Previous Appointments
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
