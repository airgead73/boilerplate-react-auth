import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticationBtn } from './auth';

// pages
import {
  Home,
  Dashboard,
  PageNotFound,
  Profile
} from './pages';

// components
import {
  Nav
} from './components';

function App() {   

  const {
    isLoading,
    error
  } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>oops... {error.message}</div>
  }

  return (
    <div>
      <h1>Library App</h1>
      <AuthenticationBtn/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  )

}

export default App;

