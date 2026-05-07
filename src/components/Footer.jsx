import { Link } from 'react-router-dom';
import { FaFlask, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface py-5 mt-auto border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <Link className="navbar-brand d-flex align-items-center fw-bold fs-4 mb-3" to="/">
              <FaFlask className="me-2 text-primary" />
              <span className="gradient-text">ResearchNexus</span>
            </Link>
            <p className="text-muted mb-4">
              The premier global ecosystem for ethical research collaboration, consultancy, and academic mentoring. Connecting researchers to advance scientific frontiers.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-secondary rounded-circle p-2"><FaTwitter /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle p-2"><FaLinkedin /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle p-2"><FaGithub /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Platform</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2"><Link to="/opportunities" className="text-decoration-none text-reset hover-primary">Opportunities</Link></li>
              <li className="mb-2"><Link to="/publications" className="text-decoration-none text-reset hover-primary">Services</Link></li>
              <li className="mb-2"><Link to="/consultancy" className="text-decoration-none text-reset hover-primary">Consultancy</Link></li>
              <li className="mb-2"><Link to="/quantum" className="text-decoration-none text-reset hover-primary">Quantum Lab</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Support</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-reset hover-primary">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none text-reset hover-primary">Contact</Link></li>
              <li className="mb-2"><Link to="/faq" className="text-decoration-none text-reset hover-primary">FAQs</Link></li>
              <li className="mb-2"><Link to="/privacy" className="text-decoration-none text-reset hover-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">Get in Touch</h5>
            <div className="d-flex align-items-start gap-3 text-muted mb-3">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              <span>Seetharampuram, Narsapur, West Godavari, Andhra Pradesh 534280, India</span>
            </div>
            <div className="d-flex align-items-center gap-3 text-muted mb-3">
              <FaPhone className="text-primary" />
              <span>+91-9701881436</span>
            </div>
            <div className="d-flex align-items-center gap-3 text-muted">
              <FaEnvelope className="text-primary" />
              <span>appikonda.mohan@gmail.com</span>
            </div>
          </div>
        </div>
        <hr className="my-4 border-muted opacity-25" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted mb-0">© 2026 ResearchNexus Ecosystem. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-muted mb-0 small">Empowering Ethical Academic Collaborations.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
