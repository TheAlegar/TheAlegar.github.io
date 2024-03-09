// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './routes/Home';
import Footer from './Footer';
import Clients from './routes/Clients';
import Notfound from './routes/Notfound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
