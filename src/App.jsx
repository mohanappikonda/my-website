import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import Publications from './pages/Publications';
import Consultancy from './pages/Consultancy';
import QuantumResearch from './pages/QuantumResearch';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Analytics from './pages/Analytics';
import Contact from './pages/Contact';
import About from './pages/About';
import AdminPanel from './pages/AdminPanel';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/quantum" element={<QuantumResearch />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
