import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarList from "./Navbar/Navigation";
import { getOneUser, editUser } from "../redux/Actions/UserActions";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, Col,Modal } from "react-bootstrap";
function UserProfile() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useNavigate();
  const user = useSelector((state) => state.UserReducer.user);
  useEffect(() => {
    dispatch(getOneUser());
  }, []);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [img, setImg] = useState("");
  return (
    <div>
      <NavBarList />
      <div className="bod">
        {user && (
          <div class="card">
            <div class="img-avatar">
              <img src={user.user.img} />
                
              
            </div>
            <div class="card-text">
              <div class="portada"></div>
              <div class="title-total">
                <div class="title">Profile:</div>
                <h2> FirstName: {user.user.firstname}</h2>

                <div class="desc">
                  LastName:{user.user.lastname}
                  <br />
                  Email:{user.user.email}
                </div>
                <button
                  className="Submitbutton1"
                  onClick={() => {
                    handleShow();
                  }}
                >
                  {" "}
                  Edit Profile{" "}
                </button>
                <div class="actions">
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title> Edit Your Profile Informations</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control
                              placeholder={user.user.firstname}
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control
                              placeholder={user.user.lastname}
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder={user.user.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label column>Password</Form.Label>
                          <Col>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                        <img src={img === "" ? user.user.img : img} style={{maxWidth:"150px"}} />
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Image Url</Form.Label>
                          <Form.Control
                            placeholder={user.user.img}
                            onChange={(e) => setImg(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        className="Buttonchange"
                        variant="dark"
                        onClick={(e) => {
                          e.preventDefault();

                          dispatch(
                            editUser(
                              {
                                password: password,
                                email: email,
                                firstname: firstname,
                                lastname: lastname,
                                img: img,
                              },
                              history
                            )
                          );
                          handleClose();
                        }}
                      >
                        Edit User
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <div className="Editcontainer"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
