import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DoctorNav.css";
import Logo from "../Asset/medrep.jpg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { toast } from "react-toastify";

const DoctorNav = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en",
  );

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setSelectedLanguage(selectedLang);
  };

  const handleLogout = () => {
    localStorage.removeItem("doctor-token");
    window.location.replace("/");
    toast.success("Logout Successfull");
  };

  return (
    <div className="doctor-navbar">
      <div className="doctor-navbar-logo">
        <img src={Logo} alt="" />
      </div>

      <ul className="doctor-navbar-list">
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/doctor">
            {t("Home")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/doctor/appointment"
          >
            {t("Appointments")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/doctor/patients"
          >
            {t("Patients")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/doctor/accountsettings"
          >
            {t("Profile")}
          </Link>
        </li>
        <li onClick={handleLogout}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            {t("Logout")}
          </Link>
        </li>
        <select
          className="language-selector"
          onChange={handleChange}
          value={selectedLanguage}
        >
          <option value="en">{t("English")}</option>
          <option value="tn">{t("Tamil")}</option>
          <option value="fr">{t("French")}</option>
          <option value="hi">{t("Hindi")}</option>
        </select>
      </ul>
    </div>
  );
};

export default DoctorNav;
