import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { register } from "../../redux/Actions/AuthActions";
import NavBarList from "../../components/Navbar/Navigation";
import Footer from "../../components/Footer/Footer";
const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <div>
      <NavBarList />
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1></h1>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              
            </p>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
             
            </span>
          </div>
        </div>
        <div class="right">
          <h5>Register</h5>
          <div class="inputs">
            <input
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <br></br>
            <input
              placeholder="Lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <br></br>
            <input
              type="email"
              placeholder="Email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              email === '' | password === '' ? alert("You must fill the form!") : 
              dispatch(
                register(
                  {
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                  },
                  history
                )
              );
            }}
          >
            Register
          </button>
        </div>
      </div>
      <Footer/>
    </div>

    // <div className="Signupcontainer">
    //   <Form>
    //     <Col>
    //       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //         <Form.Label>Firstname</Form.Label>
    //         <Form.Control
    //           placeholder="Jhon"
    //           onChange={(e) => setFirstname(e.target.value)}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //         <Form.Label>Lastname</Form.Label>
    //         <Form.Control
    //           placeholder="Jhon"
    //           onChange={(e) => setLastname(e.target.value)}
    //         />
    //       </Form.Group>
    //     </Col>
    //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="name@example.com"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formPlaintextPassword">
    //       <Form.Label column>Password</Form.Label>
    //       <Col>
    //         <Form.Control
    //           type="password"
    //           placeholder="Password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Button
    //       variant="dark"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         dispatch(
    //           register(
    //             {
    //               email: email,
    //               password: password,
    //               firstname: firstname,
    //               lastname: lastname,
    //             },
    //             history
    //           )
    //         );
    //       }}
    //     >
    //       Sign Up
    //     </Button>
    //   </Form>
    // </div>
  );
};

export default Signup;
