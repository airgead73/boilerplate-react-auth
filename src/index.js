import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { DOMAIN, CLIENTID } from "./constants";



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      redirectUri={window.location.origin}
    >
      <App/>
    </Auth0Provider>    
  </React.StrictMode>,
  document.getElementById('root')
)