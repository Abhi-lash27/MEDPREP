import React from 'react';
import './AddDoctor.css'
import AdminNav from '../../components/Navbar/Admin-Nav';
function AddNurse() {
  return (
    <div>
      <AdminNav></AdminNav>
      <div className="menu">
        <div className="formbox">
          <br /><br /><br /><br />
          <center><h1 style={{ color: '#009879' }}>ADD NURSE</h1></center>
          <form action="docregistration.php" method="post" id="register1" className="input-group" autoComplete="off">
            <input type="text" name="doctorid" className="input-field" placeholder="Enter Nurse's User Id" required />
            <input type="text" name="doctorname" className="input-field" placeholder="Enter Nurse's Full Name" required />

            <select name="spec" className="input-field" id="spec" onChange={() => myFunction()}>
              <option value="" disabled selected>--Field--</option>
              <option value="Registered Nurse">Registered Nurse</option>
              <option value="Licensed Vocational Nurse">Licensed Vocational Nurse</option>
              <option value="Clinical Nurse Specialist">Clinical Nurse Specialist</option>
              <option value="Nurse Practitioner">Nurse Practitioner</option>
              <option value="Nurse Manager">Nurse Manager</option>
              <option value="Operating Room (OR) Nurse: ">Operating Room (OR) Nurse: </option>
              <option value="Emergency Room (ER) Nurse:">Emergency Room (ER) Nurse</option>
              <option value="Intensive Care Unit (ICU) Nurse:">Intensive Care Unit (ICU) Nurse:</option>
              <option value="Pediatric Nurse:">Pediatric Nurse:</option>
              <option value="Geriatric Nurse: ">Geriatric Nurse: </option>
              <option value="Psychiatric Nurse: ">Psychiatric Nurse: </option>
            </select><br />
            <input type="password" name="password" className="input-field" id="myinput1" placeholder="Enter Password" />
            <input type="password" name="cpassword" className="input-field" id="myinput2" placeholder="Confirm Password" />
            <select className='input-field'>
            <option value='' disabled >--Gender--</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
             <br /><br />
            <center><button type="submit" name="submit" className="submit-btn">ADD NURSE</button></center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNurse;
