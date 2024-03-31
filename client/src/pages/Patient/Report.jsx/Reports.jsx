import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PatientNav from "../../../components/Navbar/Patient-Nav";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [token, setToken] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("patient-token");
    setToken(storedToken);

    if (!storedToken) {
      return (window.location.href = "/");
    }

    const decodedToken = jwtDecode(storedToken);
    const { id } = decodedToken;

    const fetchReports = async () => {
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

        if (res.status >= 200 && res.status < 300) {
          setReports(res.data.reports);
          setFilteredReports(res.data.reports); // Initialize filtered reports with all reports
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchReports();
  }, []);

  useEffect(() => {
    // Filter reports based on search term when it changes
    const filtered = reports.filter((report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReports(filtered);
  }, [searchTerm, reports]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDownload = async (fileId) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/api/files/${fileId}`,
        method: "GET",
        responseType: "blob", // important
        headers: {
          "Content-Type": "application/json", // Adjust content type if necessary
          Authorization: `Bearer ${token}`, // Include your authorization token here
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf"); // you can set file name here
      document.body.appendChild(link);
      link.click();
      toast.success("File Download Successful");
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("Error Downloading File");
    }
  };

  return (
    <div>
      <PatientNav />
      <h1 className="heading">Reports</h1>

      <SearchBar handleSearch={handleSearch} />
      <div className="container">
        <div className="PatientLayout">
          <div className="PatientLayout">
            <div className="returnCart">
              <br />

              {filteredReports.map((report) => (
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
                          alignItems: "flex-end",
                        }}
                      >
                        <IconButton
                          onClick={() => handleDownload(report.fileId)}
                        >
                          <DownloadIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
