import React, { useEffect, useState } from "react";
import DoctorNav from "../../components/Navbar/Doctor-Nav";
import Footer from "../../components/Footer/Footer";
import "./Prescription.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import logger from "../../../logger";

const PrescriptionForm = () => {
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [description, setDescription] = useState("");

  const [prevPrescriptions, setPrevPrescriptions] = useState([]);

  const [token, setToken] = useState(null);

  const { patientId } = useParams()

  useEffect(() => {
    const storedToken = localStorage.getItem('doctor-token')
    setToken(storedToken)

    if(!storedToken) {
      return window.location.href = '/'
    }

    const fetchPreviousPrescription = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/patients/${patientId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
          }
        })
        setPrevPrescriptions(res.data.prescriptions)

      } catch (err) {
        logger.error(err)
      }
    }
    fetchPreviousPrescription()
  }, []);


  const addMedicine = async () => {
    if (!medicine || !dosage || !description) {
      return toast.error("All fields are required")
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/prescriptions`, {
        patientId,
        medication: medicine,
        dosage,
        description
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if(res.status >= 200 && res.status < 300) {
        toast.success("Medicine added successfully")
        setMedicine('')
        setDosage('')
        setDescription('')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (err) {
      logger.error(err)
    }
  }

  const handleDelete = async (prescriptionId) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/prescriptions/${prescriptionId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if(res.status >= 200 && res.status < 300) {
        toast.success('Medicine deleted successfully')
        setTimeout(() =>{
          window.location.reload()
        }, 1000)
      }
    } catch (err) {
        logger.error(err)
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div>
      <DoctorNav />
      <div className="doc-form-container">
        <h2 className="doc-title">Prescription Form</h2>
        <div className="doc-form-group">
          <label className="doc-label">Medicine:</label>
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            className="doc-form-control"
          />
        </div>

        <div className="doc-form-group">
          <label className="doc-label">Dosage:</label>
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="doc-form-control"
          />
        </div>

        <div className="doc-form-group">
          <label className="doc-label">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="doc-form-control"
          ></textarea>
        </div>

        <button onClick={addMedicine} className="doc-btn-add">
          Add Medicine
        </button>
        <br/>
        <br/>
        <h2>Previous Medications</h2>
        <br />
        <ul className="doc-todo-list">
          {prevPrescriptions.map((prescription) => (
            <li key={prescription.id} className="doc-todo-item">
              <div>
                <strong>Medicine:</strong> {prescription.medication},{" "}
                <strong>Dosage:</strong> {prescription.dosage},{" "}
                <strong>Description:</strong> {prescription.description}, {" "}
                <strong>Date:</strong> {formatDate(prescription.createdAt)}
              </div>
              <button
                onClick={() => handleDelete(prescription.id)}
                className="doc-btn-delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default PrescriptionForm;
