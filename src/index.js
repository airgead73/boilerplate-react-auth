import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dpmsandbox.us.auth0.com"
      clientId="WUY5maG2RFF72clvvumgorvPKRkTCtJJ"
      redirectUri={window.location.origin}
    >
      <App/>
    </Auth0Provider>    
  </React.StrictMode>,
  document.getElementById('root')
)