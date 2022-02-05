import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoutes() {
  const isAuth = useAuth0();
  const location = useLocation()
  return isAuth ? <Outlet/> : <Navigate to="/" replace state={{ from: location }}/>;
}

export default ProtectedRoutes;
