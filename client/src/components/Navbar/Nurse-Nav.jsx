import React from "react";
import { Link } from "react-router-dom";
import "./NurseNav.css";
import Logo from "../Asset/medrep.jpg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function NurseNav() {
  const { t } = useTranslation();

  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("nurse-token");
    window.location.replace("/");
    toast.success("Logout Successfull");
  };

  return (
    <div className="nurse-navbar">
      <div className="nurse-navbar-logo">
        <img src={Logo} alt="" />
      </div>

      <ul className="nurse-navbar-list">
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/nurse">
            {t("Home")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/nurse/patientlist"
          >
            {t("Patients")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/nurse/reports"
          >
            {t("Reports")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/nurse/records"
          >
            {t("Records")}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/nurse/accountsettings"
          >
            {t("Profile")}
          </Link>
        </li>
        <li onClick={handleLogout}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            {t("Logout")}
          </Link>
        </li>
        <select className="language-selector" onChange={handleChange}>
          <option value="en">English</option>
          <option value="tn">Tamil</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
        </select>
      </ul>
    </div>
  );
}

export default NurseNav;
