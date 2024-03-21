import React, { useState } from 'react';
import DoctorNav from '../../components/Navbar/Doctor-Nav';
import HeadBanner from '../../components/Banner/HeadBanner';
import './AppointmentDoc.css';
import { useTranslation,Trans } from 'react-i18next'

const AppointmentDoc = () => {
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'John Doe',
      date: '2024-03-19',
      time: '10:00 AM',
      reason: 'Checkup',
      status: 'Pending',
      actionStatus: '',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '2024-03-20',
      time: '11:30 AM',
      reason: 'Follow-up',
      status: 'Pending',
      actionStatus: '',
    },
    // Add more sample appointments as needed
  ]);

  // Function to handle approval
  const handleApprove = id => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id
          ? { ...appointment, status: 'Approved', actionStatus: 'Approved' }
          : appointment
      )
    );
  };

  // Function to handle rejection
  const handleReject = id => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id
          ? { ...appointment, status: 'Rejected', actionStatus: 'Rejected' }
          : appointment
      )
    );
  };

  const {t} = useTranslation()

  return (
    <div>
      <DoctorNav />
      <HeadBanner
        bannerimage='https://source.unsplash.com/random?wallpapers'
        heading='Appointments'
      />
      <div className='appointment-table mt-4'>
        <table>
          <thead>
            <tr>
              <th>{t('Name')}</th>
              <th>{t('Date')}</th>
              <th>{t('Time')}</th>
              <th>{t('Reason')}</th>
              <th>{t('Status')}</th>
              <th>{t('Actions')}</th>
              <th>{t('Report')}</th>
              <th>{t('Prescription')}</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.status}</td>
                <td>
                  {appointment.status === 'Pending' && (
                    <>
                      <button className='status-btn approve' onClick={() => handleApprove(appointment.id)}>
                       {t(' Approve')}
                      </button>
                      <button className='status-btn decline' onClick={() => handleReject(appointment.id)}>
                       {t(' Reject')}
                      </button>
                    </>
                  )}
                  {appointment.status !== 'Pending' && (
                    <span className={`action-status ${appointment.actionStatus}`}>
                      {appointment.actionStatus}
                    </span>
                  )}
                </td>
                <td>
                  <input type='file' />
                </td>
                <td>
                  <input type='file' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentDoc;
