import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// authentication
import LogBtn from './components/AccessBtn/AccessBtn';

// pages
import {
  Home,
  About,
  PageNotFound,
  Products,
  Users
} from './pages';

// routes
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {  

  return (
    <Router>
      <h1>react boilerplate</h1>
      <LogBtn/>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/products">products</Link></li>
        <li><Link to="/users">users</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/products" element={<Products/>}/>
          <Route path="/users" element={<Users/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </Router>
  );

}

export default App;

