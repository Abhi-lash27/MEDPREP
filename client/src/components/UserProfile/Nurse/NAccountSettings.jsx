import React, { useEffect, useState } from "react";
import "./NAccountSettings.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import logger from "../../../../logger";
import { toast } from "react-toastify";

const NAccountSetting = () => {

  const [userId, setUserId] = useState(null);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('nurse-token')
    setToken(storedToken)

    if(!storedToken) {
      return window.location.href = '/'
    }

    const decodedToken = jwtDecode(storedToken)
    const { id } = decodedToken

    setUserId(id)

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/nurses/${id}` , {
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${storedToken}`
          }
        })

        if(res.status >= 200 && res.status < 300) {
          setName(res.data.fullName)
          setEmail(res.data.email)
          setPhone(res.data.phone)
          setExperience(res.data.experience)
        }

      } catch (err) {
        logger.error(err)
      }
    }

    fetchUser()

  }, []);

  const handleUpdate = async () => {
    try {

      if (!name || !phone || !email || !experience) {
        toast.error('Please fill in all required fields.');
        return;
      }

      // Validate phone number format
      if (!/^\d{10}$/.test(phone)) {
        toast.error('Phone number should be 10 digits.');
        return;
      }

      const data = {
        fullName: name,
        phone,
        email,
        experience
      }

      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/nurses/${userId}`, data, {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`
        }
      })

      if(res.status >= 200 && res.status < 300) {
        toast.success('Profile updated successfully')
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } else {
        toast.error('Failed to update date')
      }
    } catch (err) {

      logger.error(err)
    }
  }


  return (
    <div className="accountsettings">
      <h1 className="acnt-head">Personal Information</h1>
      <div className="form">
        <div className="form-group">
          <label>
            Your Name <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            Phone <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            Email <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            Experience <span>*</span>
          </label>
          <input
            type="text"
            className="input-doc"
            name="exp"
            id="exp"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
      </div>
      <button className="save-btn" onClick={handleUpdate}>Update Changes</button>
    </div>
  );
};

export default NAccountSetting;
