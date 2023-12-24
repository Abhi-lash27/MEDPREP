

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrevApp from './PrevApp';
import Book from './Book';
import SidePanel from './SidePanel';

const Main = () => {
  const [appointments, setAppointments] = useState([]);

  const onSave = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  return (
    <Router>
       
        <SidePanel/>
      <Routes>
        <Route path='/book' element={<Book onSave={onSave} />} />
        <Route path='/prevapp' element={<PrevApp appointments={appointments} />} />
      </Routes>
    </Router>
    
  );
};

export default Main;
