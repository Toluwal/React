import React from 'react';
import { Link } from 'react-router-dom'; 
import './Signup.css';
import emailIcon from "../Asset/email_icon.png";
import passwordIcon from "../Asset/password_icon.png";
import nameIcon from "../Asset/name_icon.png";

const Signup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
            <img src={nameIcon} alt="" />
            <input type="text" placeholder='Enter your name'/>
            </div>
            <div className="input">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder='Enter email'/>
            </div>
            <div className="input">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder='Enter password' />
            </div>
        </div>   
        <div className="submit-container">
            <div className="submit">Sign Up</div>
        </div>
        <div className="Registered">
            <p>Already have an account?</p>
            <Link to="/Login" className="submit">Login</Link> 
        </div>
    </div>
  );
}

export default Signup;
