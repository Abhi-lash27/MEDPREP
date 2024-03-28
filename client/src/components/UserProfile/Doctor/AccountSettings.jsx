import React, { useState, useEffect } from "react";
import "./AccountSettings.css";
import { useTranslation, Trans } from "react-i18next";

const AccountSetting = () => {
  const { t } = useTranslation();

  // Sample data
  const [Data, setData] = useState({
    name: "John Doe",
    specialization: "Cardiologist",
    phone: "123-456-7890",
    email: "johndoe@example.com",
    dateOfJoin: "2020-01-01",
    experience: "5 years",
  });

  return (
    <div className="accountsettings">
      {/* Personal Information */}
      <h1 className="acnt-head">
        <Trans i18nKey="title">{t("Account Settings")}</Trans>
      </h1>
      <div className="form">
        <div className="form-group">
          <label>
            {t("Name")} <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="name"
            id="name"
            value={Data.name}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>
            {t("Specialization")} <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="spec"
            id="spec"
            value={Data.specialization}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>
            {t("Phone")} <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="phone"
            id="phone"
            value={Data.phone}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>
            {t("Email")} <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="email"
            id="email"
            value={Data.email}
            readOnly
          />
        </div>
        {/* date of join */}
        <div className="form-group">
          <label>
            {t("Date of Join")} <span>*</span>
          </label>
          <input
            type="date"
            className="input-doc"
            name="doj"
            id="doj"
            value={Data.dateOfJoin}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>
            {t("Experience")} <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="exp"
            id="exp"
            value={Data.experience}
            readOnly
          />
        </div>
      </div>
      <button className="save-btn">{t("Update Changes")}</button>
    </div>
  );
};

export default AccountSetting;
