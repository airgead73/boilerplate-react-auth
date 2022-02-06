import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// authentication
import { useAuth0 } from '@auth0/auth0-react';
import Auth0ProviderWithNavigation from './routes/auth0-provider-with-navigation';
import { LogBtn } from './components/Log';

// pages
import {
  Home,
  About,
  PageNotFound,
  Products,
  Users,
  Profile
} from './pages';

// routes
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {    

  const { isLoading, isAuthenticated } = useAuth0();

  if(isLoading) {
    return <div>loading...</div>;
  }

  if(isAuthenticated) {
    return (
      <Router>
        <Auth0ProviderWithNavigation>
          <h1>Library App</h1>
          <LogBtn/>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/products">products</Link></li>
            <li><Link to="/users">users</Link></li>
            <li><Link to="/profile">profile</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/products" element={<Products/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes> 
        </Auth0ProviderWithNavigation>     
      </Router>
    );
  }


}

export default App;

