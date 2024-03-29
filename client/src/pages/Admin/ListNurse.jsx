import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Navbar/Admin-Nav";
import img1 from "../Nurse/img.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import logger from "../../../logger";
import { toast } from "react-toastify"

const ListNurse = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState(null);
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem("admin-token");
    setToken(storedToken);

    if (!storedToken) {
      return window.location.href = "/";
    }

    const getAllNurses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/nurses`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`
          }
        });

        setData(res.data.nurse);
        logger.log(res.data);
      } catch (err) {
        logger.error(err);
      }
    };

    getAllNurses();
  }, []);

  const handleClick = (value) => {
    setInfo(value);
  };

  const handleDelete = async (value) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/nurses/${value.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setData(prevData => prevData.filter(nurse => nurse.id !== value.id));
        toast.success('Nurse deleted successfully')
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } else {
        logger.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      logger.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <AdminNav />
      <br />
      {!info && (
        <div className="container">
          <div className="PatientLayout">
            <div className="returnCart">
              <h1>Nurse List</h1>
              {Array.isArray(data) &&
                data.map((value) => (
                  <div className="list" key={value.id} onClick={() => handleClick(value)}>
                    <div className="item">
                      <img src={img1} alt={value.fullName} />
                      <div className="info">
                        <div className="description" style={{paddingTop: "50px"}}>
                          Name: {value.fullName.toUpperCase()}
                          <br />
                          Email: {value.email}
                          <br />
                          Phone: {value.phone}
                          <br />
                          Experience: {value.experience}
                        </div>
                        <div className="options">
                          <IconButton onClick={() => handleDelete(value)}>
                            <DeleteIcon style={{color: "red"}}/>Delete
                          </IconButton>
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
  );
};

export default ListNurse;
