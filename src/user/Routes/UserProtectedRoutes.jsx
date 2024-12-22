import { Outlet, Navigate } from "react-router-dom";

const UserProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
};

export default UserProtectedRoutes;