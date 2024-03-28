import React from "react";
import DoctorNav from "../components/Navbar/Doctor-Nav";
import HeadBanner from "../components/Banner/HeadBanner";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/DocHero";
import { Trans } from "react-i18next";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
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
          <h2 className="responsibility-heading">RESPONSIBILITES OF DOCTOR</h2>
          <div className="responsibility-container">
            <div className="responsibility-item">
              <h2>1. Medical Advice and Prescriptions:</h2>
              <p>
                Provide medical advice to patients and address their concerns.
                <br />
                Prescribe medications and issue electronic prescriptions.
              </p>
            </div>
            <div className="responsibility-item">
              <h2>2. Medical Records Management:</h2>
              <p>
                Maintain accurate and up-to-date electronic medical records for
                each patient.
                <br />
                Document medical histories, diagnoses, treatments, and
                prescriptions.
              </p>
            </div>
            <div className="responsibility-item">
              <h2>3. Preserving Patient Privacy:</h2>
              <p>
                Adhere to strict privacy and security protocols to protect
                patient information.
                <br />
                Ensure compliance with healthcare data protection regulations.
              </p>
            </div>
            <div className="responsibility-item">
              <h2>4. Feedback and Improvement:</h2>
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
