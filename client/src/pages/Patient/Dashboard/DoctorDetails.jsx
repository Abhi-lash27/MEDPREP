import { React, useState } from "react";
import "./DcoDe.css";
import { useNavigate } from "react-router-dom";

const DoctorDetails = () => {
  const initialDocCard = [
    {
      profile:
        "https://th.bing.com/th?id=OIP.h2RfTna7CBfVMHkss4aKWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "Varsha.M",
      degree: "MBBS,FRCS",
      speciality: "Gynocologist",
      Exp: "4",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp&w=246&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "John",
      degree: "MBBS,FRCS",
      speciality: "Pediatrician",
      Exp: "6",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp&w=246&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "Varsha",
      degree: "MBBS,FRCS",
      speciality: "Gynocologist",
      Exp: "4",
    },
    {
      profile:
        "https://th.bing.com/th/id/OIP.YRMLniRRYMMwDDytblUv0wHaIH?w=181&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "John",
      degree: "MBBS,FRCS",
      speciality: "Pediatrician",
      Exp: "6",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.h2RfTna7CBfVMHkss4aKWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "Varsha.M",
      degree: "MBBS,FRCS",
      speciality: "Gynocologist",
      Exp: "4",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp&w=246&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "John",
      degree: "MBBS,FRCS",
      speciality: "Pediatrician",
      Exp: "6",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp&w=246&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "Varsha",
      degree: "MBBS,FRCS",
      speciality: "Gynocologist",
      Exp: "4",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.h2RfTna7CBfVMHkss4aKWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "Varsha.M",
      degree: "MBBS,FRCS",
      speciality: "Gynocologist",
      Exp: "4",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp&w=246&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "John",
      degree: "MBBS,FRCS",
      speciality: "Pediatrician",
      Exp: "6",
    },
    {
      profile:
        "https://th.bing.com/th?id=OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp&w=246&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "Varsha",
      degree: "MBBS,FRCS",
      speciality: "Gynocologist",
      Exp: "4",
    },
  ];

  const [items, setItems] = useState([...initialDocCard]);
  const navigate = useNavigate();

  return (
    <div className="main-c">
      <div className="card-s">
        {items.map((data, index) => (
          <div key={index} className="card-d">
            <div className="background">
              <img src={data.profile} className="ic" />
            </div>

            <div className="content">
              <h2>
                Dr.{data.name}, {data.degree}
              </h2>
              <p className="des">{data.speciality}</p>
              <p className="exp">Experience: {data.Exp} years </p>
              <div className="action-buttons">
                <button
                  className="btn"
                  onClick={() => navigate("/patient/docinfo")}
                >
                  <span>View More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DoctorDetails;
