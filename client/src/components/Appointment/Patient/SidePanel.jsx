// SidePanel.js

import React from 'react';
import { NavLink } from 'react-router-dom';
// import './SidePanel.css';

function SidePanel() {
  return (
    <div className='side-panel'>
      <ul className='side-ul'>
        <li className='side-item'>
          <NavLink to='/book' className='side-link' activeClassName='active'>
            Book Appointment
          </NavLink>
        </li>
        <li className='side-item'>
          <NavLink to='/prevapp' className='side-link' activeClassName='active'>
            Previous Appointments
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
