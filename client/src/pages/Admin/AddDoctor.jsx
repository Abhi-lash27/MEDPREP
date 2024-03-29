import { useEffect, useState } from "react";
import "./AddDoctor.css";
import AdminNav from "../../components/Navbar/Admin-Nav";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import logger from "../../../logger";

function AddDoctor() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [specializations, setSpecializations] = useState("");
  const [experience, setExperience] = useState();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("admin-token");
    setToken(storedToken);

    if (!storedToken) {
      return window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/doctors`, {
          fullName,
          phone,
          password,
          email,
          specializations,
          experience
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (res.status >= 200 && res.status < 300) {
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setSpecializations("");
        setExperience("");
        return toast.success("Doctor created successfully");
      }

    } catch (err) {
      logger.error(err);
      return toast.error(err);
    }
  };
  return (
    <div>
      <AdminNav />
      <div className="menu">
        <div className="formbox">
          <br />
          <br />
          <br />
          <br />
          <center>
            <h1 style={{ color: "#009879" }}>ADD DOCTORS</h1>
          </center>
          <form
            id="register1"
            className="input-group"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="fullName"
              className="input-field"
              placeholder="Enter Doctor's Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              className="input-field"
              id="myinput1"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              className="input-field"
              id="myinput1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              name="phoneNumber"
              className="input-field"
              id="myinput1"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="text"
              name="specializations"
              className="input-field"
              id="myinput1"
              placeholder="Specialization"
              value={specializations}
              onChange={(e) => {
                setSpecializations(e.target.value);
              }}
            />
            <input
              type="text"
              name="experience"
              className="input-field"
              id="myinput1"
              placeholder="Experience"
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            />
            <br />
            <br />
            <center>
              <button type="submit" name="submit" className="submit-btn">
                ADD DOCTOR
              </button>
            </center>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AddDoctor;
