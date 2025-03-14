import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  const userRole = user.admin ? "admin" : user.manager ? "manager" : "employee";

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    alert("Unauthorized access! You do not have permission to view this page.");
    return <Navigate to={location.pathname} replace />;
  }
  return <Outlet />;  //<Outlet /> acts like a placeholder that gets replaced by the matching child route component.
};

export default ProtectedRoute;
