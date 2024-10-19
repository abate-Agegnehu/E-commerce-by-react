import React from "react";
import Footer from "../components/Footer/Footer";
import "./CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">
          Already have an account? <span>Login here</span>{" "}
        </p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to use the terms of use and policy.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginSignup;
