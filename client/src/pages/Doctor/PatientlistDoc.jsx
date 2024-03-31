import React, { useState, useEffect } from "react";
import DoctorNav from "../../components/Navbar/Doctor-Nav";
import HeadBanner from "../../components/Banner/HeadBanner";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import logger from "../../../logger";

const PatientlistDoc = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("doctor-token")
    setToken(storedToken)

    if(!storedToken) {
      return window.location.href = '/'
    }

    const fetchAllPatients = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/patients`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
          }
        })

        setData(res.data.patient)

      } catch (err) {
        logger.error(err)
      }
    }

    fetchAllPatients()
  }, []);

  const navigateToIndividualPatient = (patientId) => {
      window.location.href = `/doctor/patients/${patientId}`
  }


  return (
    <div>
      <DoctorNav />
      <HeadBanner
        bannerimage="https://source.unsplash.com/random?wallpapers"
        heading="Patient List"
      />
      <div className="container">
        <div className="PatientLayout">
          <div className="returnCart">
            <h1>Patient Details</h1>
            {data.map((patient) => (
              <div className="list" onClick={() => navigateToIndividualPatient(patient.id)}>
                <div className="item">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt={patient.fullName}
                    style={{
                      height: '150px',
                      width: '150px',
                    }}
                  />
                  <div className="info">
                    <div className="name">{patient.fullName.toUpperCase()}</div>
                    <div className="description">
                      Phone: {patient.phone}
                      <br />
                      Age: {patient.age}
                      <br />
                      Gender: {patient.gender}
                      <br />
                      Blood Group: {patient.bloodGroup}
                      <br />
                      DOB:{patient.dob}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatientlistDoc;
