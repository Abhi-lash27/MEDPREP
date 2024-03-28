import React from "react";

function Forgot() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="form-holder">
          <h2>Forgot Password?</h2>
          <form action="" className="form">
            <div className="form-group">
              <img src="img/email.png" alt="" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
            <div className="form-group">
              <a href="index.html">Login</a>
              <a href="sign-up.html" className="right-link">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
