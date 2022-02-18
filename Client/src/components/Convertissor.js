import React from 'react'
import "./Calculator.css";

import { Button, Form, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import NavBarList from "./Navbar/Navigation";
const Convertissor = () => {
  const [co2, setco2] = useState("");
  const [p, setP] = useState("");
  const [pf, setPf] = useState("");
  const location = useLocation();
  const calculate = () => {
      const s = ((co2/45) + (location.state.engine/40))*1.6
      setPf(s);
  }
  
  return (
    <div>
        <NavBarList />
        <div className="Calculcontainer">
        <div className="formuleexp">
Formule de Calcul des Chevaux Fiscaux :
PF = (CO2 : 45) + (P : 40)1,6

PF : Puissance Fiscale
CO2 : Émission de dioxyde de carbone (gr/Km)
P : Puissance du moteur en kW (1 ch = 0,736 kW)
</div>
        <Form>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>co2</Form.Label>
            <Form.Control
              placeholder="Jhon"
              onChange={(e) => setco2(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Puissance Car</Form.Label>
            <Form.Control
              placeholder="Jhon"
              value={location.state.engine}
              disabled
            />
          </Form.Group>
        </Col>
       <div className="result"> {pf} Din </div>
       <div className="buttondiv">
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            calculate();
          }}
        >
          Convert
        </Button>
        </div>
      </Form>
      </div>
    </div>
  )
}

export default Convertissor