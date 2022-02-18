import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
const useAuth = () => {
  let token = localStorage.getItem("token");
  let decoded = token ? jwt_decode(token) : "";
  return token && decoded.role !== "admin";
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
