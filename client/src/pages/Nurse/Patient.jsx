import React, { useState,useReducer,useEffect } from 'react'
import './Patient.css'
import HeadBanner from '../../components/Banner/HeadBanner'
import NurseNav from '../../components/Navbar/Nurse-Nav'
import Footer from '../../components/Footer/Footer'
import img1 from './img.jpg'
// import Profile from './Profile'
const Patient = () => {
  const Data = [{
    "Name":"Adbul",
    "Age":19,
    "Gender":"Male",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2222/api/patients');
        if (response.ok) {
          const json = await response.json();
          setData(json.patient);
          console.log(json.patient);
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 



  return (
  <div>
  <NurseNav></NurseNav>
  <br></br>
  {!Info && <HeadBanner  
  bannerimage='https://source.unsplash.com/random?wallpapers'
  heading='Paitent Page'/>}
  {!Info && <div className="container">
    <div className="PatientLayout">
      <div className="returnCart">
        <h1>Patient Details</h1>
        {Data.map((value)=>(
        <div className="list" onClick={() => handelclick(value)}>
          <div className="item">
            <img src={img1} alt="Patient" />
            <div className="info" >
              <div className="name">{value.fullName}</div>
              <div className="description" >
                Name: {value.fullName}<br />
                Age: {value.email}<br />
                Gender: {value.phone}<br />
                Blood Group: {value.bloodGroup}<br />
                DOB:{value.dob}
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
  <Footer/>
</div>
);
}

export default Patient
