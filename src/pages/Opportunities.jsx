import { useState } from 'react';
import { FaSearch, FaFilter, FaCalendarAlt, FaTools, FaHandshake, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import { opportunities } from '../data/dummy';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterDomain, setFilterDomain] = useState('All');

  const domains = ['All', 'Artificial Intelligence / Power Systems', 'Quantum Computing / Cybersecurity', 'Machine Learning / Renewable Energy', 'Biomedical Engineering / Signal Processing', 'Natural Language Processing', 'IoT / Healthcare Technology', 'Deep Learning / Autonomous Systems', 'Environmental Engineering / Chemistry'];
  const types = ['All', 'Journal Collaboration', 'Conference Collaboration', 'Book Chapter', 'Patent Collaboration', 'Funded Research'];

  const filteredOps = opportunities.filter(op => {
    const matchesSearch = op.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         op.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || op.type === filterType;
    const matchesDomain = filterDomain === 'All' || op.domain === filterDomain;
    return matchesSearch && matchesType && matchesDomain;
  });

  return (
    <div className="container section-padding fade-in">
      <div className="row mb-5 align-items-end">
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3">Research Collaboration Opportunities</h1>
          <p className="text-muted mb-0">Discover and apply for technical research partnerships and co-researcher roles.</p>
        </div>
        <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
          <button className="btn btn-primary rounded-pill px-4">
            Post an Opportunity
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card glass p-4 mb-5 border-0 shadow-sm">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label small fw-bold">Search</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0 text-muted"><FaSearch /></span>
              <input 
                type="text" 
                className="form-control border-start-0" 
                placeholder="Title, skills, or domain..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-bold">Collaboration Type</label>
            <select 
              className="form-select" 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-bold">Research Domain</label>
            <select 
              className="form-select" 
              value={filterDomain}
              onChange={(e) => setFilterDomain(e.target.value)}
            >
              {domains.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="row g-4">
        {filteredOps.length > 0 ? (
          filteredOps.map((op) => (
            <div className="col-lg-6" key={op.id}>
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="badge rounded-pill" style={{ backgroundColor: op.color + '15', color: op.color }}>
                      {op.type}
                    </span>
                    <span className={`small fw-bold ${op.status === 'Open' ? 'text-success' : 'text-danger'}`}>
                      ● {op.status}
                    </span>
                  </div>
                  
                  <h4 className="fw-bold mb-2">{op.title}</h4>
                  <div className="d-flex align-items-center gap-2 text-muted small mb-4">
                    <FaHandshake className="text-primary" />
                    <span>{op.domain}</span>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2 small">
                        <FaTools className="text-muted" />
                        <span className="text-muted">Skills: {op.skills.slice(0, 2).join(', ')}...</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2 small">
                        <FaMoneyBillWave className="text-muted" />
                        <span className="text-muted">{op.funding}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2 small">
                        <FaCalendarAlt className="text-muted" />
                        <span className="text-muted">Target: {op.target}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2 small">
                        <FaClock className="text-muted" />
                        <span className="text-muted">Timeline: {op.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted small mb-4 line-clamp-3">
                    {op.description}
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
                    <div className="d-flex align-items-center gap-2">
                      {op.postedBy === 'Dr. Appikonda Mohan' ? (
                        <img src="/profile_pic.png" alt="Profile" className="rounded-circle shadow-sm" style={{ width: '32px', height: '32px', objectFit: 'cover', objectPosition: 'center 15%' }} />
                      ) : (
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold small" style={{ width: '32px', height: '32px' }}>
                          {op.avatar}
                        </div>
                      )}
                      <div className="lh-1">
                        <h6 className="mb-0 small fw-bold">{op.postedBy}</h6>
                        <small className="text-muted x-small">{op.institution}</small>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm rounded-pill px-4">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <div className="mb-3 text-muted" style={{ fontSize: '3rem' }}><FaFilter /></div>
            <h3>No opportunities found</h3>
            <p className="text-muted">Try adjusting your filters or search terms.</p>
            <button className="btn btn-outline-primary" onClick={() => {setSearchTerm(''); setFilterType('All'); setFilterDomain('All');}}>
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
