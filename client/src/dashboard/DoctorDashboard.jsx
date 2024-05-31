import React from "react";
import DoctorNav from "../components/Navbar/Doctor-Nav";
import HeadBanner from "../components/Banner/HeadBanner";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/DocHero";
import { Trans, useTranslation } from "react-i18next";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {

  const {t} = useTranslation();
  return (
    <div className="doctor-dashboard">
      <DoctorNav />
      {/* <HeadBanner
        bannerimage='https://source.unsplash.com/random?wallpapers'
        heading='WELCOME'
      /> */}
      <Hero />
      <div className="dashboard-content">
        <section className="responsibilities-section">
          <h2 className="responsibility-heading">{t("Resp")}</h2>
          <div className="responsibility-container">
            <div className="responsibility-item">
              <h2>1. {t("number1doc")}:</h2>
              <p>
                {t("number1docdes")}
              </p>
            </div>
            <div className="responsibility-item">
              <h2>2. {t("number2doc")}:</h2>
              <p>
                Maintain accurate and up-to-date electronic medical records for
                each patient.
                <br />
                Document medical histories, diagnoses, treatments, and
                prescriptions.
              </p>
            </div>
            <div className="responsibility-item">
              <h2>3. {t("number3doc")}:</h2>
              <p>
                Adhere to strict privacy and security protocols to protect
                patient information.
                <br />
                Ensure compliance with healthcare data protection regulations.
              </p>
            </div>
            <div className="responsibility-item">
              <h2>4. {t("number4doc")}:</h2>
              <p>
                Seek feedback from patients regarding their online healthcare
                experience.
                <br />
                Contribute to the improvement of the eHospital platform by
                providing insights and suggestions.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
