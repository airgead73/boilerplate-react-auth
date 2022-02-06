import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/dashboard">dashboard</Link></li>
      <li><Link to="profile">profile</Link></li>
    </ul>
  );
}

export default Nav;
