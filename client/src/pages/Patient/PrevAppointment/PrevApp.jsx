import React, { useEffect } from "react";
import "./PrevApp.css";
import "../../../components/Appointment/Patient/Hooks/UseBookContext";
import { useBookContext } from "../../../components/Appointment/Patient/Hooks/UseBookContext";
import PatientNav from "../../../components/Navbar/Patient-Nav";
import Footer from "../../../components/Footer/Footer";

//copy
import { useTranslation, Trans } from "react-i18next";
//

const PrevApp = () => {
  //copy
  const { t } = useTranslation();
  //

  const { Appointment, dispatch } = useBookContext();
  // useEffect(async() =>
  // {
  //   const response = await fetch('http://localhost:2222/api/appointments')
  //   if(response.ok)
  //   {
  //   const json = await response.json()
  //   dispatch({type:'SET_APPOINTMENT',payload:json.appointment})
  //   }
  // },[]
  // )

  return (
    <div>
      <PatientNav></PatientNav>
      <br></br>
      <div className="container-p">
        <h1 className="heading">{t("PreviousAppointment")}</h1>
        <br></br>
        {
          <div className="one">
            <table className="tb">
              <thead>
                <tr className="row">
                  <th className="head">{t("Name")}</th>
                  <th className="head">{t("Date")}</th>
                  <th className="head">{t("Time")}</th>
                  <th className="head">{t("Doctor")}</th>
                  <th className="head">{t("Reason")}</th>
                  <th className="head">{t("Status")}</th>
                  <th className="head">{t("Action")}</th>
                </tr>
              </thead>
              <tbody>
                {Appointment.map((value) => (
                  <tr className="row">
                    <td className="data"> unknown</td>
                    <td className="data"> {value.appointmentDate}</td>
                    <td className="data"> {value.appointmentTiming}</td>
                    <td className="data"> unknown</td>
                    <td className="data"> {value.reason}</td>
                    <td className="data"> Pending</td>
                    <td className="data">
                      <Button>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default PrevApp;
