import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import { login } from "../../redux/Actions/AuthActions";
import NavBarList from "../../components/Navbar/Navigation";
import Footer from "../../components/Footer/Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <div>
      <NavBarList/>
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1></h1>
            <p style={{fontSize: "20px" , fontWeight: "600"}} >
              
            </p>
            <span style={{fontSize: "20px" , fontWeight: "600"}}>
             
            </span>
          </div>
        </div>
        <div class="right">
          <h5>Login</h5>
          <div class="inputs">
            <input
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              email === '' | password === '' ? alert("You must fill the form!") : 
              dispatch(login({ email: email, password: password }, history));
            }}
          >
            Login
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
