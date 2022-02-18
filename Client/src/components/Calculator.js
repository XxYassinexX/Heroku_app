import React from "react";
import "./Calculator.css";
import { Button, Form, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import NavBarList from "./Navbar/Navigation";
const Convertissor = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [pf, setPf] = useState("");
  const location = useLocation();
  const calculate = () => {
    const s = (location.state.litres * 100) / (b - a);
    setPf(s);
  };

  return (
    <div>
      <NavBarList />
      <div className="Calculcontainer">
      <div className="formuleexp">
        Consommation en l/100 km = (litres x 100) ÷ (kilométrage B - kilométrage
        A).
      </div>
      <Form>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>kilométrage A</Form.Label>
            <Form.Control
              placeholder="Jhon"
              onChange={(e) => setA(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>kilométrage B</Form.Label>
            <Form.Control
              placeholder="Jhon"
              onChange={(e) => setB(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Litres</Form.Label>
            <Form.Control
              placeholder="Jhon"
              value={location.state.litres}
              disabled
            />
          </Form.Group>
        </Col>
        <div className="result"> {pf}L </div>
        <div className="buttondiv">
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            calculate();
          }}
        >
          Calculate
        </Button>
        </div>
      </Form>
    </div>
    </div>
  );
};

export default Convertissor;
