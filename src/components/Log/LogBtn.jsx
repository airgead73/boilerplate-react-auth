import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const LogBtn = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogoutButton/> : <LoginButton/>
}

export default LogBtn;