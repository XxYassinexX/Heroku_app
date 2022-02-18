import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landpage from "./pages/Landpage/Landpage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AddCar from "./components/AddCar";
import DisplayCars from "./components/DisplayCars";
import UserProfile from "./components/UserProfile";
import EditCar from "./components/EditCar";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "./pages/Dashboard/dashboard";
import ManageUsers from "./components/ManageUsers";
import Convertissor from "./components/Convertissor";
import Calculator from "./components/Calculator";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landpage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>    
          <Route path="/posts" element={<AllPosts />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/add_car" element={<AddCar />}></Route>
            <Route path="/display_car" element={<DisplayCars />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/edit_car" element={<EditCar />}></Route>
            <Route path="/convertissor" element={<Convertissor />}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/add_post" element={<AddPost />}></Route>
            <Route path="/manage_users" element={<ManageUsers />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
