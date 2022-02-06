import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { DOMAIN, CLIENTID } from "../constants";

const Auth0ProviderWithNavigation = ({ children }) => {

  const domain = DOMAIN;
  const clientId = CLIENTID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )

}

export default Auth0ProviderWithNavigation;