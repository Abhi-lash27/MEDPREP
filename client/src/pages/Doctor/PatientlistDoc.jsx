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
      window.location.href = `/doctors/patients/${patientId}`
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
              <div key={patient.id} className="card-d" onClick={() => navigateToIndividualPatient(patient.id)}>
                <div className="background">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{objectFit: "contain"}} className="ic" />
                </div>
                <div className="content">
                  <h2>Name: {patient.fullName}</h2>
                  <p className="exp">Email: {patient.email}</p>
                  <p className="exp">Mobile: {patient.phone}</p>
                  <p className="exp">Blood Group: {patient.bloodGroup}</p>
                  <p className="exp">Date of Birth: {patient.dob}</p>
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
