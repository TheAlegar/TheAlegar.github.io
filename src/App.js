// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './routes/Home';
import Footer from './Footer';
import Clients from './routes/Clients';
import Notfound from './routes/Notfound';
import Shows from './routes/Shows';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Shows />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
