import React, { useEffect, useState } from "react";
import "./PAccountSettings.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import logger from "../../../../logger";
import { toast } from "react-toastify";

const PAccountSetting = () => {

  const [userId, setUserId] = useState(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('patient-token')
    setToken(storedToken)

    if(!storedToken) {
      return window.location.href = '/'
    }

    const decodedToken = jwtDecode(storedToken)
    const { id } = decodedToken

    setUserId(id)

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/patients/${id}` , {
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${storedToken}`
          }
        })

        if(res.status >= 200 && res.status < 300) {
          setName(res.data.fullName)
          setEmail(res.data.email)
          setAge(res.data.age)
          setPhone(res.data.phone)
          setGender(res.data.gender)
          setDob(res.data.dob)
          setBloodGroup(res.data.bloodGroup)
        }

      } catch (err) {
        logger.error(err)
      }
    }

    fetchUser()

  }, []);


  const handleUpdate = async () => {
    try {

      if (!name || !phone || !email || !dob || !bloodGroup || !gender || !age) {
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
        dob,
        bloodGroup,
        gender,
        age
      }

      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/patients/${userId}`, data, {
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
            {" "}
            Name <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>
            Phone <span>*</span>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="1234567890"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>
            Email <span>*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>
            Age <span>*</span>
          </label>
          <input
            type="text"
            name="age"
            id="age"
            placeholder="20"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>
            Gender <span>*</span>
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            Date Of Birth <span>*</span>
          </label>
          <input
            type="text"
            name="dob"
            id="dob"
            placeholder="01/01/2003"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>
            Blood Group <span>*</span>
          </label>
          <input
            type="text"
            name="bg"
            id="bg"
            placeholder="A +ve"
            value={bloodGroup}
            onChange={(e) => {
              setBloodGroup(e.target.value);
            }}
          />
        </div>

      </div>
      <button className="save-btn" onClick={handleUpdate}>
        Update Changes
      </button>
    </div>
  );
};

export default PAccountSetting;
