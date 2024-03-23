import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import AccountCircle icon from Material-UI Icons
import LockIcon from '@mui/icons-material/Lock'; // Import Lock icon from Material-UI Icons

const UserSidebar = ({ activepage }) => {
  return (
    <div className='usersidebar'>
      {activepage === 'accountsettings' ? (
        <div className='s2'>
          <AccountCircleIcon /> {/* Use AccountCircle icon */}
          <Link to='/doctor/accountsettings' className='stylenone'>
            <span className='sidebar-text'>Account Settings</span>
          </Link>
        </div>
      ) : (
        <Link to='/doctor/accountsettings' className='stylenone'>
          <div className='s1'>
            <AccountCircleIcon /> {/* Use AccountCircle icon */}
            <span className='sidebar-text'>Account Settings</span>
          </div>
        </Link>
      )}
      {activepage === 'changepassword' ? (
        <div className='s2'>
          <LockIcon /> {/* Use Lock icon */}
          <Link to='/doctor/changepassword' className='stylenone'>
            <span className='sidebar-text'>Change Password</span>
          </Link>
        </div>
      ) : (
        <Link to='/doctor/changepassword' className='stylenone'>
          <div className='s1'>
            <LockIcon /> {/* Use Lock icon */}
            <span className='sidebar-text'>Change Password</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserSidebar;
