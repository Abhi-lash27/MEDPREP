import React, { useEffect, useState } from "react";
import "./PrevApp.css";
import { useTranslation } from "react-i18next";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import logger from "../../../../logger";
import PatientNav from "../../../components/Navbar/Patient-Nav";
import Footer from "../../../components/Footer/Footer";
import { toast } from "react-toastify";

const PrevApp = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const storedToken = localStorage.getItem("patient-token");
    setToken(storedToken);

    if (!storedToken) {
      return (window.location.href = "/");
    }

    const decodedToken = jwtDecode(storedToken);
    const id = decodedToken.id;

    const getData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/patients/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        setData(res.data.appointments);
      } catch (err) {
        logger.error(err);
      }
    };

    getData();
  }, []);

  const handleDelete = async (appointmentId) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/appointments/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        setData((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment.id !== appointmentId
          )
        );
        toast.success("Appointment deleted successfully.");
      } else {
        toast.error("Failed to delete appointment.");
      }
    } catch (err) {
      logger.error(err);
      toast.error("An error occurred while deleting the appointment.");
    }
  };

  return (
    <div>
      <PatientNav />
      <br />
      <div className="patient-container">
        <h1 className="patient-heading">{t("Previous Appointment")}</h1>
        <br />
        <div className="patient-one">
          <table className="patient-tb">
            <thead>
              <tr className="patient-row">
                <th className="patient-head">{t("Name")}</th>
                <th className="patient-head">{t("Date")}</th>
                <th className="patient-head">{t("Time")}</th>
                <th className="patient-head">{t("Doctor")}</th>
                <th className="patient-head">{t("Reason")}</th>
                <th className="patient-head">{t("Status")}</th>
                <th className="patient-head">{t("Action")}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((appointment) => (
                <tr key={appointment.id} className="patient-row">
                  <td className="patient-data">{appointment.patientName}</td>
                  <td className="patient-data">{appointment.appointmentDate}</td>
                  <td className="patient-data">{appointment.appointmentTiming}</td>
                  <td className="patient-data">{appointment.doctorName}</td>
                  <td className="patient-data">{appointment.reason}</td>
                  <td className="patient-data">{appointment.status}</td>
                  <td className="patient-data">
                    <button
                      className="patient-action-btn"
                      onClick={() => handleDelete(appointment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrevApp;
