import { useAuth0 } from '@auth0/auth0-react';
import {AuthenticationBtn} from './auth';

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
    </div>
  )

}

export default App;

