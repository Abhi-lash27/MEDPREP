//1st page : Left->leftsidePanel, doctordetails->doclist

import React from "react";
import "./PatientDetails.css";
import DoctorDetails from "./DoctorDetails";
import Left from "./Left";
import PatientNav from "../../../components/Navbar/Patient-Nav";
import { useTranslation } from "react-i18next";
import Footer from "../../../components/Footer/Footer";

const Front = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <PatientNav />

        <div className="front-m">
          <Left />
          <div className="mid">
            <div className="wel">
              <h2>{t("Looking for a Specialist ??")}</h2>
            </div>
            <div className="doc-list">
              <DoctorDetails />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Front;
