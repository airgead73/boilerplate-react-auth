import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function ProtectedRoutes() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation()
  return isAuthenticated ? <Outlet/> : <Navigate to="/" replace state={{ from: location }}/>;
}

export default ProtectedRoutes;
// export default withAuthenticationRequired(ProtectedRoutes, {
//   onRedirecting: () => <div>loading</div>
// })
