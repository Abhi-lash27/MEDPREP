import { useState, useEffect } from "react";
import "./Patient.css";
import HeadBanner from "../../components/Banner/HeadBanner";
import NurseNav from "../../components/Navbar/Nurse-Nav";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import logger from "../../../logger";
import { useTranslation } from "react-i18next";

const PatientList = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const {t} = useTranslation();

  useEffect(() => {
    const storedToken = localStorage.getItem("nurse-token")
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
    window.location.href = `/nurse/patients/${patientId}`
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2222/api/patients");
        if (response.ok) {
          const json = await response.json();
          setData(json.patient);
          console.log(json.patient);
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NurseNav></NurseNav>
      <HeadBanner
        bannerimage="https://source.unsplash.com/random?wallpapers"
        heading="Patient List"
      />
      <div className="container">
        <div className="PatientLayout">
          <div className="returnCart">
            <h1>{t("PatientDetails")}</h1>
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

export default PatientList;
