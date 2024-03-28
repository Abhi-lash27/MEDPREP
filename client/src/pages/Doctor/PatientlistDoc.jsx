import React, { useState, useReducer, useEffect } from "react";
import DoctorNav from "../../components/Navbar/Doctor-Nav";
import HeadBanner from "../../components/Banner/HeadBanner";
import Footer from "../../components/Footer/Footer";

const PatientlistDoc = () => {
  const [Data, setData] = useState([]);
  const [Info, setInfo] = useState(null);
  const handelclick = (value) => {
    setInfo(value);
  };

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
      <DoctorNav />
      <HeadBanner
        bannerimage="https://source.unsplash.com/random?wallpapers"
        heading="Paitent List"
      />
      <div className="container">
        <div className="PatientLayout">
          <div className="returnCart">
            <h1>Patient Details</h1>
            {Data.map((value, index) => (
              <div key={index} className="card-d">
                <div className="background">
                  <img src={value.profile} className="ic" />
                </div>

                <div className="content">
                  <h2>Name: {value.fullName}</h2>
                  <p className="exp">Email: {value.email}</p>
                  <p className="exp">Mobile: {value.phone}</p>
                  <p className="exp">Blood Group:{value.bloodGroup}</p>
                  <p className="exp">Date of Birth:{value.dob}</p>
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
