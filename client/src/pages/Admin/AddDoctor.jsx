import React from 'react';
import './AddDoctor.css'
import AdminNav from '../../components/Navbar/Admin-Nav';
function AddDoctor() {
  return (
    <div>
      <AdminNav></AdminNav>
      <div className="menu">
        <div className="formbox">
          <br /><br /><br /><br />
          <center><h1 style={{ color: '#009879' }}>ADD DOCTORS</h1></center>
          <form action="docregistration.php" method="post" id="register1" className="input-group" autoComplete="off">
            <input type="text" name="doctorid" className="input-field" placeholder="Enter Doctor's User Id" required />
            <input type="text" name="doctorname" className="input-field" placeholder="Enter Doctor's Full Name" required />

            <select name="spec" className="input-field" id="spec" onChange={() => myFunction()}>
              <option value="" disabled selected>--Select Specialization--</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Neurology">Neurology</option>
              <option value="Physiotheraphy">Physiotheraphy</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Emergency">Emergency</option>
            </select><br />
            <input type="password" name="password" className="input-field" id="myinput1" placeholder="Enter Password" />
            <input type="password" name="cpassword" className="input-field" id="myinput2" placeholder="Confirm Password" />
            <br /><br />
            <center><button type="submit" name="submit" className="submit-btn">ADD DOCTOR</button></center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
