import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Navbar/Admin-Nav";
import img1 from "../Nurse/img.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const ListNurse = () => {
  const [Data, setData] = useState([]);
  const [Info, setInfo] = useState(null);

  const handleClick = (value) => {
    setInfo(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2222/api/nurses ");
        if (response.ok) {
          const json = await response.json();
          setData(json.nurse);
          console.log(json.nurse);
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handeldelete = async (value) => {
    try {
      const response = await fetch(
        " http://localhost:2222/api/nurses/" + value.id,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        console.log("Deleted");
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <AdminNav />
      <br />
      {!Info && (
        <div className="container">
          <div className="PatientLayout">
            <div className="returnCart">
              <h1>Nurse List</h1>
              {Array.isArray(Data) &&
                Data.map((value) => (
                  <div className="list" onClick={() => handleClick(value)}>
                    <div className="item">
                      <img src={img1} alt="Patient" />
                      <div className="info">
                        <div className="name">{value.fullName}</div>
                        <div className="description">
                          Name: {value.fullName}
                          <br></br>
                          Email:{value.email}
                          <br></br>
                          Ph:{value.phone}
                          <br></br>
                          <br />
                          ....
                        </div>
                        <div className="options">
                          <IconButton onClick={() => handeldelete(value)}>
                            <DeleteIcon></DeleteIcon>
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
