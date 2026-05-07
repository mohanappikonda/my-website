import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaShieldAlt, FaHandshake, FaGlobe } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
import { stats, domains, opportunities, testimonials } from '../data/dummy';

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4">
                Empowering the Future of <br /> <span className="gradient-text">Research Collaboration</span>
              </h1>
              <p className="lead text-muted mb-5 fs-4" style={{ maxWidth: '900px' }}>
                Connect with world-class professors, PhD scholars, and industry experts. 
                Discover ethical research opportunities and technical partnerships to accelerate your academic impact.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Link to="/opportunities" className="btn btn-primary btn-lg shadow">
                  Explore Opportunities <FaArrowRight className="ms-2" />
                </Link>
                <Link to="/consultancy" className="btn btn-outline-secondary btn-lg">
                  Hire a Consultant
                </Link>
              </div>
              <div className="mt-5 d-flex gap-4 align-items-center justify-content-center justify-content-lg-start">
                <div className="d-flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="avatar-circle border border-2 border-white bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', borderRadius: '50%', marginLeft: i > 1 ? '-15px' : '0', zIndex: 5-i }}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="mb-0 text-muted small fw-medium">
                  Joined by <span className="text-primary fw-bold">12k+</span> researchers globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface py-5 border-top border-bottom">
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((stat, idx) => {
              const Icon = Icons[stat.icon];
              return (
                <div className="col-md-4 col-lg-2" key={idx}>
                  <div className="p-3">
                    <Icon className="fs-3 mb-3" style={{ color: stat.color }} />
                    <h3 className="fw-bold mb-1">{stat.value.toLocaleString()}+</h3>
                    <p className="text-muted small mb-0">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Research Domains</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore collaborations across diverse scientific fields and emerging technologies.
            </p>
          </div>
          <div className="row g-4">
            {domains.map((domain, idx) => {
              const Icon = Icons[domain.icon];
              return (
                <div className="col-md-6 col-lg-3" key={idx}>
                  <div className="card h-100 p-4 text-center border-0 bg-surface shadow-sm">
                    <div className="mx-auto bg-opacity-10 p-3 rounded-circle mb-3" style={{ backgroundColor: domain.color, width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                      <Icon className="fs-2" style={{ color: domain.color }} />
                    </div>
                    <h5 className="fw-bold mb-2">{domain.name}</h5>
                    <p className="text-muted small mb-0">{domain.count} Active Opportunities</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className="fw-bold mb-2">Featured Opportunities</h2>
              <p className="text-muted mb-0">Latest high-impact research collaborations.</p>
            </div>
            <Link to="/opportunities" className="btn btn-outline-primary rounded-pill">
              View All <FaArrowRight className="ms-2" />
            </Link>
          </div>
          <div className="row g-4">
            {opportunities.slice(0, 3).map((op) => (
              <div className="col-lg-4" key={op.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="p-4">
                    <span className="badge rounded-pill mb-3" style={{ backgroundColor: op.color + '20', color: op.color }}>
                      {op.type}
                    </span>
                    <h5 className="fw-bold mb-3">{op.title}</h5>
                    <p className="text-muted small mb-4 text-truncate-2">{op.description}</p>
                    <div className="d-flex align-items-center gap-3 mt-auto pt-3 border-top">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
                        {op.avatar}
                      </div>
                      <div>
                        <h6 className="mb-0 small fw-bold">{op.postedBy}</h6>
                        <small className="text-muted">{op.institution}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container">
          <div className="card bg-primary text-white p-5 border-0 shadow-lg overflow-hidden position-relative">
            <div className="row align-items-center position-relative z-1">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-3">Our Ethical Commitment</h2>
                <p className="lead mb-4 opacity-75">
                  ResearchNexus is built on the foundation of academic integrity. We strictly prohibit the buying/selling of authorship. 
                  Every collaboration must involve genuine technical contribution and intellectual merit.
                </p>
                <div className="d-flex flex-wrap gap-4">
                  <div className="d-flex align-items-center gap-2">
                    <FaShieldAlt /> <span>Verified Profiles</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaHandshake /> <span>Genuine Contributions</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaGlobe /> <span>Global Standards</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center mt-5 mt-lg-0">
                <Link to="/about" className="btn btn-light btn-lg px-5 rounded-pill text-primary fw-bold">
                  Read Integrity Policy
                </Link>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="position-absolute rounded-circle bg-white opacity-10" style={{ width: '300px', height: '300px', top: '-100px', right: '-100px' }}></div>
            <div className="position-absolute rounded-circle bg-white opacity-10" style={{ width: '150px', height: '150px', bottom: '-50px', left: '-50px' }}></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Success Stories</h2>
          <div className="row g-4">
            {testimonials.map((t) => (
              <div className="col-md-4" key={t.id}>
                <div className="card h-100 p-4 border-0 bg-light shadow-sm">
                  <p className="fst-italic text-muted mb-4">"{t.text}"</p>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '45px', height: '45px' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small className="text-primary d-block mb-1">{t.role}</small>
                      <small className="text-muted d-block">{t.outcome}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
