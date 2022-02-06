import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// pages
import {
  Home,
  Dashboard,
  PageNotFound,
  Profile
} from './pages';

function App() {   

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>oops... {error.message}</div>
  }

  if(isAuthenticated) {
    return (
      <div>
        <h2>Hello {user.name}</h2>
        <p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
        </p>
      </div>
    )
  } else {
    return <button onClick={() => loginWithRedirect}>login</button>
  }

}

export default App;

