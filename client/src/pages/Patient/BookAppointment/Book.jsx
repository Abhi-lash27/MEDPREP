import React, { useState, useEffect } from "react";
import "./Book.css";
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import axios from "axios";
import logger from "../../../../logger";
import { jwtDecode } from "jwt-decode";

import PatientNav from "../../../components/Navbar/Patient-Nav";
import Footer from "../../../components/Footer/Footer";
import { toast } from "react-toastify";

const Book = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [token, setToken] = useState(null);
  const [patientId, setPatientId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [reason, setReason] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('patient-token');
    setToken(storedToken);

    if (!storedToken) {
      window.location.href = "/";
    } else {
      const decodedToken = jwtDecode(storedToken);
      setPatientId(decodedToken.id);

      const fetchDoctor = async () => {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/doctors/${id}`, {
            headers: {
              "Content-Type": 'application/json',
              Authorization: `Bearer ${storedToken}`
            }
          });

          logger.info(res.data);
          setData([res.data]);
        } catch (err) {
          console.error("Error fetching doctor:", err);
        }
      };

      fetchDoctor();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      doctorId: id,
      patientId,
      doctorName,
      patientName: fullName,
      reason,
      appointmentDate: date,
      appointmentTiming: time
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/appointments`, appointmentData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })

    if(res.status >=200 && res.status < 300) {
      return toast.success("Appointment booked")
      }
    } catch (err) {
      logger.error(err)
      toast.error(err)
    }
  };

  return (
    <div>
      <PatientNav />
      <br />
      <div className="assam">
        <section>
          <h1 className="heading">{t("book")}</h1>
          <div className="containe_Book">
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <div className="input-box">
                  <label>
                    {t("Name")}
                    <span> *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>
                      {t("Select Date")}
                      <span> *</span>
                    </label>
                    <input
                      type="date"
                      name="selectedDate"
                      id="selectedDate"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-box">
                    <label>
                      {t("ScheduleTime")}
                      <span> *</span>
                    </label>
                    <select
                      className="select-box"
                      name="selectedTime"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="none">Select a Time slot</option>
                      <option value="10:00am - 11:00am">10:00am - 11:00am</option>
                      <option value="11:00am - 12:00pm">11:00am - 12:00pm</option>
                      <option value="12:00pm - 01:00pm">12:00pm - 01:00pm</option>
                      <option value="01:00pm - 02:00pm">01:00pm - 02:00pm</option>
                      <option value="02:00pm - 03:00pm">02:00pm - 03:00pm</option>
                      <option value="03:00pm - 04:00pm">03:00pm - 04:00pm</option>
                      <option value="04:00pm - 05:00pm">04:00pm - 05:00pm</option>
                      <option value="05:00pm - 06:00pm">05:00pm - 06:00pm</option>
                      <option value="06:00pm - 07:00pm">06:00pm - 07:00pm</option>
                      <option value="07:00pm - 08:00pm">07:00pm - 08:00pm</option>
                      <option value="08:00pm - 09:00pm">08:00pm - 09:00pm</option>
                    </select>
                  </div>
                </div>

                <div className="input-box">
                  <label>
                    {t("SelectSpecialist")} <span> *</span>{" "}
                  </label>
                  <select
                    className="select-box"
                    name="doctor"
                    id="doctor"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    required
                  >
                    <option value="none">Select a Doctor</option>
                    {data.map((doctor) => (
                      <option key={doctor.id} value={doctor.fullName}>
                        {doctor.fullName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-box">
                  <label>
                    {t("ReasonForAppointment")} <span> *</span>
                  </label>
                  <input
                    type="text"
                    name="reason"
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Make An Appointment{" "}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
