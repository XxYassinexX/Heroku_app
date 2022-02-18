import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarList from "./Navbar/Navigation";
import { getmycars, deleteCar } from "../redux/Actions/CarActions";
import { useNavigate } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";
import './DisplayCars.css'
function DisplayCars() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const cars = useSelector((state) => state.CarReducer.MyCars);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [myid, setID] = useState("");
  useEffect(() => {
    dispatch(getmycars());
  }, []);
  return (
    <div>
      <NavBarList />
      <div className="Carcontainer">
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Car Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this Car ?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={(e) => {
                  e.preventDefault();
                   dispatch(
                    deleteCar({
                      id: myid,
                    })
                  );
                  handleClose();
                }}
              >
                Yes Delete
              </Button>
            </Modal.Footer>
          </Modal>
        {cars &&
          cars.data.userCars.map((car) => (
            <div className="carcontainer1">
            <div className="Carinfos">
              CAR
              <span className="Carstats" >Name: {car.name}</span>
              <span className="Carstats">Model: {car.model}</span>
              <span className="Carstats">Year: {car.year}</span>
              <span className="Carstats">Type: {car.type}</span>
              <span className="Carstats">Engine: {car.engine}</span>
              <span className="Carstats">Litres: {car.litres}</span>
              <img src={car.url} alt="" className="Carpic" />
              <div className="buttonscontainer">
              
              <button className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                   setID(car._id);
                 handleShow();
                }}
              >
                Delete
              </button>
              <button className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  history("/edit_car", {
                    state: { id: car },
                  });
                }}
                name='btn1'
              >
                Update
              </button>
              <button className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  history("/calculator", {
                    state: { litres: car.litres },
                  });
                }}
                name='btn2'
              >
                Calculator
              </button>
              <button className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  history("/convertissor", {
                    state: { engine: car.engine },
                  });
                }}
                name='btn3'
              >
                Converter
              </button>
              </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DisplayCars;
