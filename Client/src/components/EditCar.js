import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editCar, getOnecar } from "../redux/Actions/CarActions";
import { useLocation, useNavigate } from "react-router-dom";

function EditCar({ Car }) {
  const car = useSelector((state) => state.CarReducer.Car);
  const history = useNavigate();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [engine, setEngine] = useState("");
  const [litres, setLitres] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getOnecar({ id: location.state.id._id }));
    setName(location.state.id.name);
    setModel(location.state.id.model);
    setYear(location.state.id.year);
    setType(location.state.id.type);
    setEngine(location.state.id.engine);
    setLitres(location.state.id.litres);
    setUrl(location.state.id.url);
  }, []);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Model</Form.Label>
          <Form.Control
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Year</Form.Label>
          <Form.Control
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Type</Form.Label>
          <Form.Control
           value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Engine</Form.Label>
          <Form.Control
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Litres</Form.Label>
          <Form.Control
            value={litres}
            onChange={(e) => setLitres(e.target.value)}
          />
        </Form.Group>
        <img src={url} />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            
            dispatch(
              editCar({
                carid: location.state.id,
                name: name,
                model: model,
                year: year,
                type: type,
                engine: engine,
                litres: litres,
                url: url,
              },history),
            );
          }}
        >
          Edit Car
        </Button>
      </Form>
    </div>
  );
}

export default EditCar;
