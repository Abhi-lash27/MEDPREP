import DoctorNav from "../../components/Navbar/Doctor-Nav";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import logger from "../../../logger";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";

const IndividualPatient = () => {
  const { t } = useTranslation();
  const { patientId } = useParams();

  const [prescriptions, setPrescriptions] = useState([]);
  const [reports, setReports] = useState([]);
  const [token] = useState(localStorage.getItem("doctor-token"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/patients/${patientId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status >= 200 && res.status < 300) {
        const reversedPrescriptions = res.data.prescriptions.reverse();
        setPrescriptions(reversedPrescriptions);
        setReports(res.data.reports);
      }
    } catch (err) {
      logger.error(err);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  const handleDownload = async (fileId) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/api/files/${fileId}`,
        method: "GET",
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf");
      document.body.appendChild(link);
      link.click();
      toast.success("File Download Successful");
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("Error Downloading File");
    }
  };

  const deletePrescription = async (prescriptionId) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/prescriptions/${prescriptionId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if (res.status >= 200 && res.status < 300) {
        toast.success('Medicine deleted successfully')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (err) {
      logger.error(err)
    }
  }

  const deleteReport = async (reportId) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/reports/${reportId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if (res.status >= 200 && res.status < 300) {
        toast.success('Report deleted successfully')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (err) {
      logger.error(err)
    }
  }

  return (
    <div>
      <DoctorNav />
      <div  style={{alignItems:"center", textAlign: 'center'}}>
        <h1 className="heading">{t("Prescriptions")}</h1>
        <br />
        <div className="one">
          {prescriptions.length === 0 ? (
            <p>No prescriptions found</p>
          ) : (
            // <table className="tb">
            //   <thead>
            //   <tr className="row">
            //     <th className="head">{t("Medication")}</th>
            //     <th className="head">{t("Dosage")}</th>
            //     <th className="head">{t("Description")}</th>
            //     <th className="head">{t("Date")}</th>
            //     <th className="head">Actions</th>
            //   </tr>
            //   </thead>
            //   <tbody >
            //   {prescriptions.map((prescription) => (
            //     <tr key={prescription.id} className="row">
            //       <td className="data">{prescription.medication}</td>
            //       <td className="data">{prescription.dosage}</td>
            //       <td className="data">{prescription.description}</td>
            //       <td className="data">{formatDate(prescription.createdAt)}</td>
            //       <td className="data">
            //         <button
            //           onClick={() => deletePrescription(prescription.id)}
            //           className="doc-btn-delete"
            //         >
            //           Delete
            //         </button>
            //       </td>
            //     </tr>
            //   ))}
            //   </tbody>
            // </table>
            <table className="tb" style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%", }}>
  <thead>
    <tr className="row" style={{ backgroundColor: "#f2f2f2" }}>
      <th className="head" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{t("Medication")}</th>
      <th className="head" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{t("Dosage")}</th>
      <th className="head" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{t("Description")}</th>
      <th className="head" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{t("Date")}</th>
      <th className="head" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{t("Action")}</th>
    </tr>
  </thead>
  <tbody>
    {prescriptions.map((prescription) => (
      <tr key={prescription.id} className="row" style={{ borderBottom: "1px solid #ddd" }}>
        <td className="data" style={{ padding: "10px" }}>{prescription.medication}</td>
        <td className="data" style={{ padding: "10px" }}>{prescription.dosage}</td>
        <td className="data" style={{ padding: "10px" }}>{prescription.description}</td>
        <td className="data" style={{ padding: "10px" }}>{formatDate(prescription.createdAt)}</td>
        <td className="data">
                  <button
                       onClick={() => deletePrescription(prescription.id)}
                       className="doc-btn-delete"
                     >
                       {t("Delete")}
                     </button>
             </td>
      </tr>
    ))}
  </tbody>
</table>
          )}
        </div>
      </div>
      <br />
      <div>
        <h1 className="heading">{t("Reports")}</h1>
        <div className="container">
          {reports.length === 0 ? (
            <p style={{display: "flex", justifyContent: 'center' , alignItems: 'center'}}>No reports found</p>
          ) : (
            <div className="PatientLayout">
              <div className="PatientLayout">
                <div className="returnCart">
                  <br />

                  {reports.map((report) => (
                    <div className="list" key={report.id}>
                      <div className="item">
                        <img
                          src="https://tse1.mm.bing.net/th?id=OIP.DESibMnCsqIPZhsedjkAAwHaHa&pid=Api&P=0&h=180"
                          alt="Patient"
                        />
                        <div className="info">
                          <div>
                            <h1>{report.title.toUpperCase()}</h1>
                          </div>
                          <div className="description">
                            <h3>{report.description}</h3>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "flex-end"
                            }}
                          >
                            <div>
                              <IconButton
                                onClick={() => handleDownload(report.fileId)}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </div>
                            <button
                              onClick={() => deleteReport(report.id)}
                              className="doc-btn-delete"
                            >
                              {t("Delete")}
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualPatient;
