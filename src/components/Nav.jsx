import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PublicNav() {
  return (
    <>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
    </>
  )
}

function ProtectedNav() {
  return (
    <>
      <li><Link to="/dashboard">dashboard</Link></li>
      <li><Link to="/profile">profile</Link></li>
    </>
  )
}

function Nav() {
  const { isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated) {
    console.log('is authenticated')
  } else {
    console.log('is not authenticated')
  }

  if(isLoading) {
    return <div>loading...</div>
  }
  return (
    <ul>
      <PublicNav/>
      {isAuthenticated && (
      <ProtectedNav/>
      )}
    </ul>
  );



}

export default Nav;
