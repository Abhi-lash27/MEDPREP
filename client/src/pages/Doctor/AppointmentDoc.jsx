import React, { useState, useRef, useEffect } from "react";
import DoctorNav from "../../components/Navbar/Doctor-Nav";
import HeadBanner from "../../components/Banner/HeadBanner";
import "./AppointmentDoc.css";
import Footer from "../../components/Footer/Footer";
import { useTranslation, Trans } from "react-i18next";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import logger from "../../../logger";
import { toast } from "react-toastify";

const AppointmentDoc = () => {

  const [appointments, setAppointments] = useState([]);

  const [token, setToken] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const storedToken = localStorage.getItem('doctor-token')

    if(!storedToken) {
      return window.location.href = '/'
    }

    setToken(storedToken)

    const decodedToken = jwtDecode(storedToken)
    const id = decodedToken.id

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/doctors/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`
          }
        })

        setAppointments(res.data.appointments)
        console.log(res.data);

      } catch (err) {
        logger.error(err)
      }
    }
    fetchAppointments()
  }, []);


  const handleApprove = async (appointmentId, status) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/appointments/${appointmentId}`, {
        status,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
        }
      })

      if(res.status >= 200 && res.status < 300) {
        toast.success("Status Updated")
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      }

    } catch (err) {
      toast.error(err)
    }
  }

  const navigateToPrescriptionForm = (patientId) => {
    window.location.href = `/doctor/prescription-form-doctor/${patientId}`; // Redirect to prescription form page with patient ID
  };

  const navigateToUploadForm = (patientId) => {
    window.location.href = `/doctor/upload-form-doctor/${patientId}`;
  };

  return (
    <div>
      <DoctorNav />
      <HeadBanner
        bannerimage="https://source.unsplash.com/random?wallpapers"
        heading={t("Appointments")}
      />
      <div className="appointment-table mt-4">
        <table>
          <thead>
          <tr>
            <th>{t("Name")}</th>
            <th>{t("Date")}</th>
            <th>{t("Time")}</th>
            <th>{t("Reason")}</th>
            <th>{t("Status")}</th>
            <th>{t("Actions")}</th>
            <th>{t("Report")}</th>
            <th>{t("Prescription")}</th>
          </tr>
          </thead>
          <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTiming}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.status}</td>
              <td>
                <>
                  <button
                    className="status-btn approve"
                    onClick={() => handleApprove(appointment.id, "ACCEPTED")}
                  >
                    {t("Approve")}
                  </button>
                  <button
                    className="status-btn decline"
                    onClick={() => handleApprove(appointment.id, "REJECTED")}
                  >
                    {t("Reject")}
                  </button>
                </>
              </td>
              <td>
                <button
                  className="doc-add-prescription-button"
                  onClick={() => navigateToUploadForm(appointment.patientId)}
                >
                  {t("UploadReport")}
                </button>
              </td>
              <td>
                {/* Button to redirect to prescription form */}
                <button
                  className="doc-add-prescription-button"
                  onClick={() => navigateToPrescriptionForm(appointment.patientId)}
                >
                  {t("AddPrescription")}
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentDoc;
