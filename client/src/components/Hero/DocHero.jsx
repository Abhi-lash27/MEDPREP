import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import arrow_icon from "../Asset/arrow.png";
import hero_image from "../Asset/hero_image.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Hero = () => {
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
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>{t("WelcomeDoctor")}</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus harum deleniti unde at temporibus quas placeat
            commodi iusto qui delectus, voluptatibus explicabo officiis nisi
            dolorum vel veniam aperiam eum!
          </p>
        </div>
        <Link to="/doctor/appointment" className="hero-latest-btn">
          <h4>{t("ViewAppointments")}</h4>
          <img src={arrow_icon} alt="" />
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
