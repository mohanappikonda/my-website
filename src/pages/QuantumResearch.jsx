import { FaAtom, FaLaptopCode, FaMicrochip, FaUsers, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { quantumEvents } from '../data/dummy';

const QuantumResearch = () => {
  return (
    <div className="fade-in">
      {/* Quantum Hero */}
      <div className="bg-dark text-white py-5 mb-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="container position-relative z-1">
          <div className="row align-items-center py-5">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary rounded-pill mb-3 px-3 py-2 fw-bold">Quantum Computing Hub</span>
              <h1 className="display-4 fw-bold mb-4">Decoding the Future of <span className="text-primary">Quantum Information</span></h1>
              <p className="lead opacity-75 mb-5">
                Join a community of quantum researchers. From Qiskit workshops to post-quantum cryptography projects, 
                collaborate on the frontier of computational science.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg rounded-pill px-4">Active Projects</button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4">Qiskit Training</button>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block text-center">
              <FaAtom className="display-1 text-primary animate-spin-slow" style={{ fontSize: '15rem', opacity: '0.2' }} />
            </div>
          </div>
        </div>
        {/* Animated background particles placeholder */}
        <div className="position-absolute w-100 h-100 top-0 start-0 opacity-10">
          <div className="quantum-mesh"></div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 text-center h-100">
              <FaLaptopCode className="display-6 text-primary mb-3" />
              <h6 className="fw-bold">Qiskit Projects</h6>
              <p className="small text-muted mb-0">12 Active implementations</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 text-center h-100">
              <FaMicrochip className="display-6 text-info mb-3" />
              <h6 className="fw-bold">Quantum HW Access</h6>
              <p className="small text-muted mb-0">IBM & IonQ simulators</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 text-center h-100">
              <FaUsers className="display-6 text-success mb-3" />
              <h6 className="fw-bold">Expert Mentors</h6>
              <p className="small text-muted mb-0">8 International professors</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 text-center h-100">
              <FaCalendarAlt className="display-6 text-warning mb-3" />
              <h6 className="fw-bold">Upcoming Events</h6>
              <p className="small text-muted mb-0">4 Workshops scheduled</p>
            </div>
          </div>
        </div>

        <h2 className="fw-bold mb-4">Quantum Workshops & Events</h2>
        <div className="row g-4">
          {quantumEvents.map((event) => (
            <div className="col-lg-6" key={event.id}>
              <div className="card border-0 shadow-sm overflow-hidden h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4 bg-primary bg-opacity-10 d-flex flex-column align-items-center justify-content-center p-4" style={{ borderLeft: `5px solid ${event.color}` }}>
                    <h2 className="fw-bold mb-0">{event.date.split('-')[2]}</h2>
                    <p className="fw-bold mb-0 text-uppercase">JUN</p>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="small text-primary fw-bold text-uppercase">{event.type}</span>
                        <span className="badge rounded-pill bg-light text-muted fw-normal border">{event.badge}</span>
                      </div>
                      <h5 className="fw-bold mb-2">{event.title}</h5>
                      <p className="small text-muted mb-3"><FaUsers className="me-2" /> {event.speaker}</p>
                      <div className="d-flex flex-wrap gap-1 mb-4">
                        {event.topics.slice(0, 3).map((t, i) => (
                          <span key={i} className="badge bg-light text-muted fw-normal x-small">{t}</span>
                        ))}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                        <span className="fw-bold text-primary">{event.fee}</span>
                        <button className="btn btn-outline-primary btn-sm rounded-pill px-4">Register <FaChevronRight className="ms-1 small" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Research Call */}
        <div className="mt-5 p-5 bg-surface border rounded-4 shadow-sm">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className="fw-bold mb-3">Launch a Quantum Project?</h3>
              <p className="text-muted mb-0">
                Are you looking for researchers to collaborate on quantum algorithms, cryptography, or error correction? 
                Post your quantum-specific opportunity and find the right expertise.
              </p>
            </div>
            <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
              <button className="btn btn-primary btn-lg rounded-pill px-5">Submit Quantum Proposal</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .quantum-mesh {
          background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px);
          background-size: 30px 30px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default QuantumResearch;
