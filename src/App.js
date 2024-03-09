// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './routes/Home';
import Footer from './Footer';
import Clients from './routes/Clients';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
