import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const isAuth = useAuth();
  const location = useLocation()
  return isAuth ? <Outlet/> : <Navigate to="/" replace state={{ from: location }}/>;
}

export default ProtectedRoutes;
