import { useAuth0 } from '@auth0/auth0-react';

function AuthenticationBtn() {

  const { isAuthenticated, logout, loginWithRedirect} = useAuth0();

  if(isAuthenticated) {
    return <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
  } else {
    return <button onClick={() => loginWithRedirect()}>login</button>
  }

}

export default AuthenticationBtn;
