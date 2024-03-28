import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import arrow_icon from "../Asset/arrow.png";
import hero_image from "../Asset/hero_image.png";

const NurseHero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome Nurse</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus harum deleniti unde at temporibus quas placeat
            commodi iusto qui delectus, voluptatibus explicabo officiis nisi
            dolorum vel veniam aperiam eum!
          </p>
        </div>
        <Link to="/nurse/patientlist" className="hero-latest-btn">
          <h4>View Patients</h4>
          <img src={arrow_icon} alt="" />
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default NurseHero;
