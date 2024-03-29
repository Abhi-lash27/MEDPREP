import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import logger from "../../../../logger";
import axios from "axios";

const Left = () => {

  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('patient-token');
    if (!storedToken) {
      logger.error("Token not found in localStorage.");
      return window.location.href = "/";
    }

    setToken(storedToken);

    try {
      const decodedToken = jwtDecode(storedToken);
      const id = decodedToken.id;

      const fetchData = async () => {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/patients/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`
            }
          });
          setData([res.data]); // Wrap res.data in an array
          console.log(res.data);
        } catch (err) {
          logger.error(err);
        }
      };

      fetchData();
    } catch (err) {
      logger.error("Error decoding JWT token:", err);
      // Handle the error, e.g., redirect to login page
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      {data.map((patient) => ( // Rename data to patient
        <div key={patient.id} className="left">
          <div className="patient-info">
            <h2>Patient Details</h2>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="img-1" alt={patient.fullName} />
            <table className="info">
              <tbody>
              <tr className="row-f">
                <td className="row-l">Name:</td>
                <td className="row-d">{patient.fullName}</td>
              </tr>
              <tr className="row-f">
                <td className="row-l">Phone Number:</td>
                <td className="row-d">{patient.phone}</td>
              </tr>
              <tr className="row-f">
                <td className="row-l">Email:</td>
                <td className="row-d">{patient.email}</td>
              </tr>
              <tr className="row-f">
                <td className="row-l">DOB:</td>
                <td className="row-d">{patient.dob}</td>
              </tr>
              <tr className="row-f">
                <td className="row-l">Blood Group:</td>
                <td className="row-d">{patient.bloodGroup}</td>
              </tr>
              <tr className="row-f">
                <td className="row-l">Age:</td>
                <td className="row-d">{patient.age}</td>
              </tr>
              <tr className="row-f">
                <td className="row-l">Gender:</td>
                <td className="row-d">{patient.gender}</td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Left;
