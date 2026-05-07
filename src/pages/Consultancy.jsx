import { useState } from 'react';
import { FaUserTie, FaStar, FaMapMarkerAlt, FaCheckCircle, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { consultants } from '../data/dummy';

const Consultancy = () => {
  return (
    <div className="container section-padding fade-in">
      <div className="row mb-5">
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3">Research Consultancy Marketplace</h1>
          <p className="text-muted mb-0">Connect with expert consultants for technical guidance, proposal reviews, and industrial liaison.</p>
        </div>
      </div>

      <div className="row g-4">
        {consultants.map((con) => (
          <div className="col-lg-4" key={con.id}>
            <div className="card border-0 shadow-sm h-100 overflow-hidden">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  {con.image ? (
                    <img src={con.image} alt={con.name} className="mx-auto rounded-circle mb-3 shadow-sm" style={{ width: '80px', height: '80px', objectFit: 'cover', objectPosition: 'center 15%' }} />
                  ) : (
                    <div className="bg-primary mx-auto text-white rounded-circle d-flex align-items-center justify-content-center fw-bold mb-3 shadow-sm" style={{ width: '80px', height: '80px', fontSize: '1.5rem', backgroundColor: con.color }}>
                      {con.avatar}
                    </div>
                  )}
                  <h5 className="fw-bold mb-1">{con.name}</h5>
                  <p className="text-primary small fw-medium mb-2">{con.title}</p>
                  {con.id === 1 && (
                    <div className="mb-2">
                      <span className="badge bg-warning text-dark x-small px-2">NPTEL DISCIPLINE STAR</span>
                    </div>
                  )}
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                    <div className="d-flex text-warning small">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="small text-muted fw-bold">({con.reviews} reviews)</span>
                  </div>
                  <span className={`badge rounded-pill ${con.availability === 'Available' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                    {con.availability}
                  </span>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold small text-muted text-uppercase mb-3">Expertise</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {con.expertise.map((exp, i) => (
                      <span key={i} className="badge bg-light text-muted fw-normal border">{exp}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold small text-muted text-uppercase mb-3">Services Offered</h6>
                  <ul className="list-unstyled mb-0">
                    {con.services.map((s, i) => (
                      <li key={i} className="small text-muted mb-2 d-flex align-items-center gap-2">
                        <FaCheckCircle className="text-primary" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted d-block">Consultancy Fee</small>
                    <span className="fw-bold fs-5">{con.rate}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">View CV</button>
                    <button className="btn btn-primary btn-sm rounded-pill px-3">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Become a Consultant Call to Action */}
      <div className="mt-5 card bg-surface p-5 border-0 shadow-sm">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="fw-bold mb-3">Are you a Research Expert?</h3>
            <p className="text-muted mb-0">
              Join our marketplace and offer your consultancy services to researchers and industry partners globally. 
              Help advance science while building your professional consulting portfolio.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <button className="btn btn-outline-primary btn-lg rounded-pill px-5">Join as Consultant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
