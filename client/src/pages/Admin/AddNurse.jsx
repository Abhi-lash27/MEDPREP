import React, { useState } from 'react';
import './AddDoctor.css'
import AdminNav from '../../components/Navbar/Admin-Nav';
function AddNurse() {
      const [Name,setName] = useState('');
      const [Email,setEmail] = useState('');
      const [pass,setPass]  = useState('');
      const [ph,setPh] = useState('');
      const handelchange = async () =>
  {
    const data = {fullName:Name,phone:ph,email:Email,password:pass}
    const response = await fetch('http://localhost:2222/api/nurses',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'}
           }
       )
  }
     return (
    <div>
      <AdminNav></AdminNav>
      <div className="menu">
        <div className="formbox">
          <br /><br /><br /><br />
          <center><h1 style={{ color: '#009879' }}>ADD NURSE</h1></center>
          <form  id="register1" className="input-group" autoComplete="off" onSubmit={handelchange}>
            <input type="text" name="doctorname" className="input-field" placeholder="Enter  Full Name" value= {Name} onChange={(e) =>{setName(e.target.value)}} required />
            {/*<select name="spec" className="input-field" id="spec" onChange={() => myFunction()}>
              <option value="" disabled selected>--Select Specialization--</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Neurology">Neurology</option>
              <option value="Physiotheraphy">Physiotheraphy</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Emergency">Emergency</option>
             </select>*/} <br />
             <input type="text" name="Email" className="input-field" id="myinput1" placeholder="Email" value= {Email} onChange={(e) =>{setEmail(e.target.value)}} />
             <input type="password" name="password" className="input-field" id="myinput1" placeholder="Create Password" value= {pass} onChange={(e) =>{setPass(e.target.value)}}/>
             <input type="text" name="Email" className="input-field" id="myinput1" placeholder="Phone Number" value= {ph} onChange={(e) =>{setPh(e.target.value)}} />
           {/* <select className='input-field'>
            <option value='' disabled >--Gender--</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select> */}
            <br /><br />
            <center><button type="submit" name="submit" className="submit-btn">ADD NURSE</button></center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNurse;
