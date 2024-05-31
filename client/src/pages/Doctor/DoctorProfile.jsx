import React from "react";
import { useParams } from "react-router-dom";
import DoctorNav from "../../components/Navbar/Doctor-Nav";
import HeadBanner from "../../components/Banner/HeadBanner";
import UserSidebar from "../../components/UserProfile/Doctor/UserSidebar";
import AccountSetting from "../../components/UserProfile/Doctor/AccountSettings";
import ChangePassword from "../../components/UserProfile/Doctor/ChangePassword";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  const { activepage } = useParams();

  const { t } = useTranslation();

  return (
    <div className="docprofile">
      <DoctorNav />
      <HeadBanner
        bannerimage="https://source.unsplash.com/random?wallpapers"
        heading={t("MyProfile")}
      />
      {/* DoctorProfile, Showing {activepage} */}
      <div className="docprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSetting />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
