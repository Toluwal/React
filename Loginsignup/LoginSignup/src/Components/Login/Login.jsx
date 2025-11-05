import React from 'react';
import { Link } from 'react-router-dom';  
import './Login.css';
import emailIcon from "../Asset/email_icon.png";
import passwordIcon from "../Asset/password_icon.png";

const Login = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={emailIcon} alt="" />
                <input type="email" placeholder='Enter email'/>
            </div>
            <div className="input">
                <img src={passwordIcon} alt="" />
                <input type="password" placeholder='Enter password' />
            </div>
        </div>

        <div className="Forgot-password">Lost password? <span>Click here!</span></div>
        <div className="submit-container">
            <div className="submit">Login</div>
        </div>
        <div className="Registered">
            <p>Don't have an account?</p>
            <Link to="/" className="submit">Sign Up</Link> 
        </div>
    </div>
  );
}

export default Login;
