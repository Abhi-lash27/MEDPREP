import { React, useEffect, useState } from "react";
import "./PatientDashboard.css";
import { useNavigate } from "react-router-dom";
import PatientNav from "../components/Navbar/Patient-Nav";
import { useTranslation, Trans } from "react-i18next";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const PatientDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("patient-token");
    setToken(storedToken);

    if (!storedToken) {
      return window.location.href = "/";
    }

    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/doctors`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
          }
        });
        setData(res.data.doctor);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchAllDoctors();
  }, []);

  return (
    <div>
      <PatientNav />
      <h1 className="heading">{t("Book Your Appointment")}</h1>
      <div className="main-c">
        <div className="card-s">
          {data.map((doctor) => (
            <div id={doctor.id} key={doctor.id} className="card-d">
              <div className="background">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PTsiJlGoHxwe69vYRObi305KaKZ_QcLJzA&usqp=CAU"
                     alt={doctor.fullName}
                     className="ic"
                    style={{
                      paddingLeft: "20px",
                      objectFit: "contain",
                      height: "100%",
                    }}
                />
              </div>
              <div className="content">
                <h2>{t("Dr")}.{doctor.fullName.toUpperCase()}</h2>
                <p className="des">{doctor.specializations}</p>
                <p className="exp">
                  {t("Experience:")} {doctor.experience} {t("years")}{" "}
                </p>
                <div className="action-buttons">
                  <button
                    className="btn"
                    onClick={() => navigate(`/patient/book/${doctor.id}`)}
                  >
                    <span>{t("Book Appointment")}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatientDashboard;
