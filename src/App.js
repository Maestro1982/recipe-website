import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import Settings from './pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipies />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
