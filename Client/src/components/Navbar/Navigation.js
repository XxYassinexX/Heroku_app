import { logout } from "../../redux/Actions/AuthActions";

import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import "./Navigation.css";

function NavBarList() {
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  let decoded = token ? jwt_decode(token) : "";
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{marginleft:"20px" , backgroundColor:"black"}}>
        <div class="container" style={{margin: "5px"}}>
          <a class="navbar-brand" href="/" style={{ color: "white" }}>
            Converter
          </a>
        
        </div>
        {token && decoded.role !== "admin" ? (
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="profile" style={{ color: "white" }}>
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="add_car" style={{ color: "white" }}>
                  AddCar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="display_car" style={{ color: "white" }}>
                  CarCollection
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="posts" style={{ color: "white" }}>
                  Posts
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/"
                  style={{ color: "white" }}
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : token && decoded.role === "admin" ? (
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="add_post" style={{ color: "white" }}>
                  AddPost
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="manage_users" style={{ color: "white" }}>
                  Users
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="posts" style={{ color: "white" }}>
                  Posts
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/"
                  style={{ color: "white" }}
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="posts" style={{ color: "white" }}>
                  Posts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Login" style={{ color: "white" }}>
                  Calculator
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Login" style={{ color: "white" }}>
                  Convertissor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Login" style={{ color: "white" }}>
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Signup" style={{ color: "white" }}>
                  Signup
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBarList;
