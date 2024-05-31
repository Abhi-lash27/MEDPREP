import React, { useEffect, useState } from "react";
import DoctorNav from '../../components/Navbar/Doctor-Nav';
import Footer from '../../components/Footer/Footer';
import './ReportUpload.css';
import axios from "axios";
import { toast } from "react-toastify";
import logger from "../../../logger";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ReportUpload = () => {

  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState(null);
  const [description, setDescription] = useState();
  const [fileId, setFileId] = useState(null);

  const [token, setToken] = useState(null);
  const {t} = useTranslation();
  const { patientId } = useParams()

  useEffect(() => {
    const storedToken = localStorage.getItem('doctor-token')
    setToken(storedToken)

    if(!storedToken) {
      return window.location.href = '/'
    }

  }, []);
  
  const fileUpload = async () => {
    try {
      const formData = new FormData()
      formData.append("data", fileData)

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/files`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      if(res.status >= 200 && res.status < 300) {
        setFileId(res.data.id)
        toast.success("File uploaded successfully")
      }
    } catch (err) {
      logger.error(err)
    }
  };

  const handleSubmit = async () => {
    try {

      const data = {
        title: fileName,
        patientId,
        fileId,
        description
      }

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/reports`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if(res.status >= 200 && res.status < 300) {
        toast.success("Report Created successfully")
        setFileName("")
        setFileData(null)
        setFileId(null)
      }

    } catch (err) {
      logger.error(err)
    }
  }

  return (
    <div>
      <DoctorNav />
      <div className="report-upload-container">
        <div className="upload-form">
          <h2 className="doc-title">{t("UploadReport")}</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">{t("Name")}:</label>
              <input
                type="text"
                id="name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="file" className="form-label">{t("SelectReport")}:</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={(e) => setFileData(e.target.files[0])}
                className="file-input"
                accept=".pdf,.doc,.docx,.txt"
                required
              />
            </div>
            <div>
              <button type="button" onClick={fileUpload} className="upload-button">{t("Upload")}</button>
            </div>
            <div className="doc-form-group">
              <label className="doc-label">{t("Description")}:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="doc-form-control"
              ></textarea>
            </div>
            <br />
            <div>
              <button type="submit" onClick={handleSubmit} className="submit-button">{t("Submit")}</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReportUpload;
