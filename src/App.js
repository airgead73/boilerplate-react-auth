import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <Router>
      <h1>react boilerplate</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </Router>
  );

}

export default App;

