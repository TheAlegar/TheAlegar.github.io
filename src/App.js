import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import './App.css';

import Navbars from "./components/Navbars"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Clients from './components/Clients';
import Shows from './components/Shows';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
       <Navbars />
        <div style={{ background: 'black' }} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
