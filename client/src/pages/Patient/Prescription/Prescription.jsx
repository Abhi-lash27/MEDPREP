import { useEffect, useState } from "react";
import PatientNav from "../../../components/Navbar/Patient-Nav";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../../../components/Footer/Footer";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import logger from "../../../../logger";

const Prescription = () => {
  const { t } = useTranslation();

  const [prescriptions, setPrescriptions] = useState([]);
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("patient-token");
    setToken(storedToken);

    const decodeToken = jwtDecode(storedToken);
    const { id } = decodeToken;

    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/patients/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`
          }
        });

        if (res.status >= 200 && res.status < 300) {
          setPrescriptions(res.data.prescriptions.reverse());
        }

      } catch (err) {
        logger.error(err);
      }
    };

    fetchData();

  }, []);

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
      <PatientNav />
      <br />
      <div>
        <h1 className="heading">{t("Prescriptions")}</h1>
        <br />
        <div className="one">
          <table className="tb">
            <thead>
            <tr className="row">
              <th className="head">{t("Medication")}</th>
              <th className="head">{t("Dosage")}</th>
              <th className="head">{t("Description")}</th>
              <th className="head">{t("Date")}</th>
            </tr>
            </thead>
            <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.id} className="row">
                <td className="data">{prescription.medication}</td>
                <td className="data">{prescription.dosage}</td>
                <td className="data">{prescription.description}</td>
                <td className="data">{formatDate(prescription.createdAt)}</td>
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

export default Prescription;
