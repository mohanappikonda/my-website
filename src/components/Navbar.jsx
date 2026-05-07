import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaUserCircle, FaFlask, FaBars } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/opportunities', label: 'Opportunities' },
    { path: '/publications', label: 'Publications' },
    { path: '/consultancy', label: 'Consultancy' },
    { path: '/quantum', label: 'Quantum' },
    { path: '/profile', label: 'My Profile' },
  ];

  return (
    <nav className="navbar navbar-expand-lg glass sticky-top py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/">
          <FaFlask className="me-2 text-primary" />
          <span className="gradient-text">ResearchNexus</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <FaBars />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link 
                  className={`nav-link px-3 fw-medium ${location.pathname === link.path ? 'text-primary active' : ''}`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-link text-decoration-none p-0" 
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <FaSun className="text-warning fs-5" /> : <FaMoon className="text-secondary fs-5" />}
            </button>
            
            <Link to="/dashboard" className="btn btn-outline-primary rounded-pill px-2 py-1 btn-sm d-flex align-items-center gap-2">
              <img src="/profile_pic.png" alt="Profile" className="rounded-circle" style={{ width: '28px', height: '28px', objectFit: 'cover', objectPosition: 'center 15%' }} />
              <span className="me-2">MK Dashboard</span>
            </Link>
            
            <Link to="/admin" className="btn btn-primary rounded-pill px-4 btn-sm shadow-sm">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
