import React from 'react'
import HeadBanner from '../../components/Banner/HeadBanner'
import Profile from '../Nurse/Profile'
import img1 from '../Nurse/img.jpg'
import { useState,useReducer } from 'react'
import AdminNav from '../../components/Navbar/Admin-Nav'
const ListDoctor = () => {
    const Data = [{
      "Name":"Akalya",
      "Age":19,
      "Gender":"Female",
      "Blood_group":"o+ve",
      "Siblings":3,
      "Email":"abdulkalam123aasath@gmail.com",
      "ph":"111111111"
    },
    {
      "Name":"Arun",
      "Age":20,
      "Gender":"Male",
      "Blood_group":"A-ve",
      "Siblings":0,
      "Email":"arun@gmail.com",
      "ph":"111111111"
    },
    {
      "Name":"Abilash",
      "Age":20,
      "Gender":"Male",
      "Blood_group":"B+ve",
      "Siblings":2,
      "Email":"abilash@gmail.com",
      "ph":"111111111"
    },{
      "Name":"Athyul",
      "Age":19,
      "Gender":"Male",
      "Blood_group":"o+ve",
      "Siblings":2,
      "Email":"Athyul@gmail.com",
      "ph":"111111111"
    }]
    const [Info,setInfo] = useState(null)
    const handelclick = (value) =>
    {
      setInfo(value)
    }
  
  
    return (
  <div>
     <AdminNav></AdminNav>
    <br></br>
    {!Info && <div className="container">
      <div className="PatientLayout">
        <div className="returnCart">
          <h1>Doctor List</h1>
          {Data.map((value)=>(
          <div className="list" onClick={() => handelclick(value)}>
            <div className="item">
              <img src={img1} alt="Patient" />
              <div className="info" >
                <div className="name">{value.Name}</div>
                <div className="description" >
                  Name: {value.Name}<br />
                  Age: {value.Age}<br />
                  Gender: {value.Gender}<br />
                  Blood Group: {value.Blood_group}<br />
                  ....
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>}
    {Info && < Profile Info ={Info} />}
 </div>
  );
  }
  

export default ListDoctor
