import { useState } from 'react';
import { FaStar, FaClock, FaCheckCircle, FaFilter, FaSearch, FaBook, FaQuoteRight, FaExternalLinkAlt, FaLightbulb } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
import { publicationServices, publications, patents } from '../data/dummy';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('articles'); // 'articles', 'services', or 'patents'
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Publication Support', 'Simulation', 'Data Analysis', 'AI Implementation', 'Proposal Support', 'Research Support', 'Academic Support'];

  const filteredServices = activeCategory === 'All' 
    ? publicationServices 
    : publicationServices.filter(s => s.category === activeCategory);

  return (
    <div className="container section-padding fade-in">
      <div className="row mb-5 align-items-end">
        <div className="col-lg-7">
          <h1 className="fw-bold mb-3">Research & IP Portfolio</h1>
          <p className="text-muted mb-0">Showcasing academic publications, patents, and professional research support services.</p>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0 text-lg-end">
          <div className="nav nav-pills bg-light p-1 rounded-pill shadow-sm d-inline-flex">
            <button 
              className={`nav-link rounded-pill px-3 px-md-4 ${activeTab === 'articles' ? 'active shadow-sm' : ''}`}
              onClick={() => setActiveTab('articles')}
            >
              Articles
            </button>
            <button 
              className={`nav-link rounded-pill px-3 px-md-4 ${activeTab === 'patents' ? 'active shadow-sm' : ''}`}
              onClick={() => setActiveTab('patents')}
            >
              Patents
            </button>
            <button 
              className={`nav-link rounded-pill px-3 px-md-4 ${activeTab === 'services' ? 'active shadow-sm' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'articles' && (
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-0 overflow-hidden">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="ps-4">Title</th>
                      <th>Year</th>
                      <th>Cited by</th>
                      <th className="pe-4 text-end">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publications.map((pub) => (
                      <tr key={pub.id}>
                        <td className="ps-4 py-3">
                          <h6 className="fw-bold mb-1">{pub.title}</h6>
                          <p className="small text-muted mb-0">{pub.authors}</p>
                          <small className="text-primary">{pub.journal}</small>
                        </td>
                        <td>{pub.year}</td>
                        <td>
                          {pub.citations > 0 ? (
                            <span className="badge bg-primary bg-opacity-10 text-primary">
                              {pub.citations}
                            </span>
                          ) : (
                            <span className="text-muted small">-</span>
                          )}
                        </td>
                        <td className="pe-4 text-end">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm rounded-pill px-3">
                            <FaExternalLinkAlt size={12} className="me-1" /> View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 sticky-top" style={{ top: '100px' }}>
              <h5 className="fw-bold mb-4">Research Impact</h5>
              <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                <span className="text-muted">Total Citations</span>
                <span className="fw-bold text-primary">52</span>
              </div>
              <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                <span className="text-muted">h-index</span>
                <span className="fw-bold text-primary">4</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-muted">i10-index</span>
                <span className="fw-bold text-primary">2</span>
              </div>
              
              <div className="bg-light p-3 rounded-3 mb-4">
                <h6 className="fw-bold small mb-2">Technical Skills</h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-white text-muted border fw-normal">MATLAB</span>
                  <span className="badge bg-white text-muted border fw-normal">Simulink</span>
                  <span className="badge bg-white text-muted border fw-normal">Qiskit</span>
                  <span className="badge bg-white text-muted border fw-normal">Python</span>
                </div>
              </div>
              
              <button className="btn btn-primary w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 shadow-sm">
                <FaBook /> Google Scholar
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'patents' && (
        <div className="row g-4">
          {patents.map((patent) => (
            <div className="col-md-6" key={patent.id}>
              <div className="card h-100 border-0 shadow-sm p-4 border-start border-4 border-primary">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="bg-primary bg-opacity-10 p-2 rounded">
                    <FaLightbulb className="text-primary fs-4" />
                  </div>
                  <span className={`badge ${patent.status === 'Published' ? 'bg-success' : 'bg-warning text-dark'} px-3 rounded-pill`}>
                    {patent.status}
                  </span>
                </div>
                <h5 className="fw-bold mb-3">{patent.title}</h5>
                <p className="small text-muted mb-3"><strong>Inventors:</strong> {patent.inventors}</p>
                <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                  <div>
                    <small className="text-muted d-block">Patent/Application No.</small>
                    <span className="fw-medium text-primary small">{patent.patentNumber}</span>
                  </div>
                  <div className="text-end">
                    <small className="text-muted d-block">Filing Date</small>
                    <span className="fw-medium small">{patent.filingDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {patents.length === 0 && (
            <div className="col-12 text-center py-5">
              <FaLightbulb className="text-muted display-1 opacity-25 mb-3" />
              <h5 className="text-muted">No patents filed yet.</h5>
            </div>
          )}
        </div>
      )}

      {activeTab === 'services' && (
        <>
          {/* Category Pills */}
          <div className="d-flex flex-wrap gap-2 mb-5">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`btn rounded-pill px-4 btn-sm ${activeCategory === cat ? 'btn-primary shadow-sm' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {filteredServices.map((service) => {
              const Icon = Icons[service.icon] || Icons.FaFileAlt;
              return (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className="card h-100 border-0 shadow-sm overflow-hidden service-card-hover">
                    <div className="bg-primary bg-opacity-10 p-4 text-center">
                      <Icon className="text-primary display-5" />
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="small text-primary fw-bold">{service.category}</span>
                        {service.rating >= 4.9 && <span className="badge bg-warning-subtle text-warning small">Top Rated</span>}
                      </div>
                      <h5 className="fw-bold mb-3">{service.title}</h5>
                      <p className="text-muted small mb-4">{service.description}</p>
                      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="d-flex align-items-center gap-1 text-warning">
                          <FaStar />
                          <span className="text-dark fw-bold small">{service.rating}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 text-muted small">
                          <FaClock />
                          <span>Reliable Delivery</span>
                        </div>
                      </div>

                      <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                        <div>
                          <small className="text-muted d-block">Starting from</small>
                          <span className="fw-bold text-primary">{service.price}</span>
                        </div>
                        <button className="btn btn-primary rounded-pill px-4 btn-sm shadow-sm">Inquire</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Banner */}
          <div className="mt-5 p-5 bg-surface rounded-4 border text-center shadow-sm">
            <h4 className="fw-bold mb-4">Quality & Ethics Guaranteed</h4>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="mb-2 text-primary fs-3"><FaCheckCircle /></div>
                <h6 className="fw-bold">Expert Guidance</h6>
                <p className="small text-muted mb-0">PhD-level academic support.</p>
              </div>
              <div className="col-md-4">
                <div className="mb-2 text-primary fs-3"><FaCheckCircle /></div>
                <h6 className="fw-bold">Integrity Focused</h6>
                <p className="small text-muted mb-0">Strict ethical standards followed.</p>
              </div>
              <div className="col-md-4">
                <div className="mb-2 text-primary fs-3"><FaCheckCircle /></div>
                <h6 className="fw-bold">Fast Response</h6>
                <p className="small text-muted mb-0">Quick turnaround for technical help.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Publications;
