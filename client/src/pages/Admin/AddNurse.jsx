import React, { useEffect, useState } from "react";
import "./AddDoctor.css";
import AdminNav from "../../components/Navbar/Admin-Nav";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify"; // Import Axios

function AddNurse() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
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

    const data = {
      fullName: fullName,
      phone: phone,
      email: email,
      password: password,
      experience: experience,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/nurses`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });

      if (res.status >= 200 && res.status < 300) {
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setExperience("");
        return toast.success("Nurse created successfully");
      }

    } catch (error) {
      toast.error("Error adding nurse:", error);
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="menu">
        <div className="formbox">
          <br />
          <br />
          <center>
            <h1 style={{ color: "#009879" }}>ADD NURSE</h1>
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
              placeholder="Enter Full Name"
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
              placeholder="Create Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              name="phone"
              className="input-field"
              id="myinput1"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
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
                ADD NURSE
              </button>
            </center>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AddNurse;
