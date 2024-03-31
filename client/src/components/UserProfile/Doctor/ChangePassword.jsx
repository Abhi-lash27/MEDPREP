import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import logger from "../../../../logger";

const ChangePassword = () => {
  const { t } = useTranslation();

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem('doctor-token')
    setToken(storedToken)

    if(!storedToken) {
      return window.location.href = '/'
    }

    const decodedToken = jwtDecode(storedToken)
    const { id } = decodedToken

    setUserId(id)
  }, []);

  const validatePassword = (password) => {
    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  }

  const updatePassword = async () => {
    try {
      if (!validatePassword(newPassword)) {
        setPasswordError('Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.');
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error('New password and confirm password do not match.');
        return;
      }

      const data = {
        password: newPassword
      };

      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/doctors/password/${userId}`, data, {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status >= 200 && res.status < 300) {
        toast.success('Password updated successfully');
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error('Failed to update password');
      }
    } catch (err) {
      logger.error(err);
      toast.error('An error occurred while updating the password');
    }
  }

  return (
    <div className="accountsettings">
      <h1 className="acnt-head">
        <Trans i18nKey="change">Change Password </Trans>
      </h1>

      <div className="form">
        <div className="form-group">
          <label>
            <Trans i18nKey="newpass">New Password </Trans>
            <span>*</span>
          </label>
          <input
            type="password"
            name="newpassword"
            id="newpassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordError(null); // Clear password error when input changes
            }}
          />
        </div>
        {passwordError && <div style={{color: 'red'}} className="error">{passwordError}</div>}
        <div className="form-group">
          <label>
            <Trans i18nKey="confirm">Confirm Password</Trans>
            <span>*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="save-btn" onClick={updatePassword}>
        <Trans i18nKey="save">Save Changes</Trans>
      </button>
    </div>
  );
};

export default ChangePassword;
