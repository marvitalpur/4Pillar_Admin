import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { ADMIN_LOGIN } from '../../../redux/actions/authentication';
import {toast} from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import './Login.scss';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "admin"
  });

  const [showPassword, setShowPassword] = useState(false);
  
  const onChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
   try {
    if (user?.email && user?.password !== "") {
      dispatch(ADMIN_LOGIN(user, navigate));
    }else{
      toast.error("Email & Password reuired!")
    }
      
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <div className="login-screen">
      <div className="background-gradient"></div>
      <div className="glassmorphism-box">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleSubmit} style={{width: "95%"}}>
          <input
           type="email"
           id="email"
           name="email"
            value={user?.email}
            onChange={onChange}
            placeholder="Email Address"
            className="input-field"
          />
         <div style={{position: "relative"}}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={user?.password}
            onChange={onChange}
            placeholder="Password"
            className="input-field"
          />
        <span
                    className="input-group-text password-toggle"
                    style={{ backgroundColor: "transparent", border: "none",position: "absolute", bottom: 0, top: -15, right: 5 }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash color="#fff" />
                    ) : (
                      <FaEye color="#fff" />
                    )}
                  </span>

                  </div>
          <button type="submit" className="gradient-button" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
