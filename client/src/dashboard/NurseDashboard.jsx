import React from "react";
import NurseNav from "../components/Navbar/Nurse-Nav";
import NurseHero from "../components/Hero/NurseHero";
import { useTranslation, Trans } from "react-i18next";
import Footer from "../components/Footer/Footer";
const NurseDashboard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NurseNav />
      <br></br>
      <NurseHero />
      <h1 style={{ fontSize: "50px" }}>
        <Trans i18nKey="info">Responsibilities for nurses</Trans>
      </h1>

      <h2 style={{ fontFamily: "cursive", fontSize: "35px" }}>
        <Trans i18nKey="h1">1.Record medical history and symptoms</Trans>
      </h2>

      <p style={{ fontFamily: "cursive", fontSize: "25px" }}>
        <Trans i18nKey="res1">
          Nurses record and maintain accurate documentation of their patients'
          health to ensure they receive the proper treatment. Most nurses begin
          this process by asking patients questions about their medical history
          to gather information about previous diagnoses and surgeries, current
          medications, allergies and relevant family medical information. They
          may also ask the patient questions about any symptoms they are
          currently experiencing and record their vitals. If the patient
          receives a new diagnosis, medication or treatment plan during their
          visit, a nurse may be responsible for updating their medical record
          with this information. Maintaining detailed and accurate medical
          records is critical for ensuring patients receive the best possible
          care.
        </Trans>
      </p>
      <Footer />
    </div>
  );
};

export default NurseDashboard;
