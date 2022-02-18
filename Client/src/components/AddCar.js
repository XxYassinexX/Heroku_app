import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOneCar, getmycars } from "../redux/Actions/CarActions";
import NavBarList from "./Navbar/Navigation";

import { useLocation, useNavigate } from "react-router-dom";
import "./AddCar.css"
function AddCar() {
  const dispatch = useDispatch();
    const history = useNavigate();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [engine, setEngine] = useState("");
  const [litres, setLitres] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    dispatch(getmycars());
  }, []);
  return (
    <div>
      <NavBarList />
      <Form className="formcontainer">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Model</Form.Label>
          <Form.Control
            placeholder="Model"
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Year</Form.Label>
          <Form.Control
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Type</Form.Label>
          <Form.Control
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Engine</Form.Label>
          <Form.Control
            placeholder="Engine"
            onChange={(e) => setEngine(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Litres</Form.Label>
          <Form.Control
            placeholder="Litres"
            onChange={(e) => setLitres(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            placeholder="Image Url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addOneCar({
                name: name,
                model: model,
                year: year,
                type: type,
                engine: engine,
                litres: litres,
                url: url,
              },   history)
            );
          }}
        >
          Add Car
        </Button>
      </Form>
    </div>
  );
}

export default AddCar;
