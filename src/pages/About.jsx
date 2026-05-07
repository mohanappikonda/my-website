import { FaShieldAlt, FaHandshake, FaGlobe, FaSearch, FaHistory, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container section-padding fade-in">
      <div className="row mb-5 align-items-center">
        <div className="col-lg-6">
          <h6 className="text-primary fw-bold text-uppercase mb-3">Our Mission</h6>
          <h1 className="fw-bold mb-4">Driving Global Scientific Excellence Through <span className="gradient-text">Ethical Collaboration</span></h1>
          <p className="lead text-muted mb-4">
            ResearchNexus was founded to address the growing need for genuine, technical, and cross-disciplinary 
            research partnerships in an increasingly complex academic landscape.
          </p>
          <p className="text-muted">
            We believe that the most significant scientific breakthroughs happen when the right minds meet. 
            Our platform provides the infrastructure to facilitate these connections while maintaining 
            the highest standards of academic integrity.
          </p>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="row g-4">
            <div className="col-6">
              <div className="card border-0 shadow-sm p-4 text-center">
                <FaGlobe className="text-primary fs-2 mb-3 mx-auto" />
                <h6 className="fw-bold">Global Network</h6>
                <p className="small text-muted mb-0">Connecting 48+ countries</p>
              </div>
            </div>
            <div className="col-6 mt-4">
              <div className="card border-0 shadow-sm p-4 text-center">
                <FaHandshake className="text-success fs-2 mb-3 mx-auto" />
                <h6 className="fw-bold">8.7k Projects</h6>
                <p className="small text-muted mb-0">Successful collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-5 py-5">
        <div className="col-lg-4">
          <div className="d-flex gap-3">
            <div className="bg-primary-subtle p-3 rounded-4 flex-shrink-0" style={{ height: 'fit-content' }}>
              <FaShieldAlt className="text-primary fs-4" />
            </div>
            <div>
              <h5 className="fw-bold mb-3">Ethical Framework</h5>
              <p className="text-muted small">We strictly monitor against predatory practices and unethical authorship. Our platform is for genuine technical contributions only.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex gap-3">
            <div className="bg-info-subtle p-3 rounded-4 flex-shrink-0" style={{ height: 'fit-content' }}>
              <FaSearch className="text-info fs-4" />
            </div>
            <div>
              <h5 className="fw-bold mb-3">Verification Process</h5>
              <p className="text-muted small">Every researcher on our platform undergoes a verification process to ensure the credibility of collaborations.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex gap-3">
            <div className="bg-warning-subtle p-3 rounded-4 flex-shrink-0" style={{ height: 'fit-content' }}>
              <FaBullseye className="text-warning fs-4" />
            </div>
            <div>
              <h5 className="fw-bold mb-3">Targeted Matching</h5>
              <p className="text-muted small">Our recommendation engine matches you with collaborators whose skills and interests align perfectly with your project.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-5 bg-surface border rounded-4 shadow-sm">
        <h3 className="fw-bold mb-4 text-center">Our Core Values</h3>
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <h4 className="fw-bold text-primary mb-2">Integrity</h4>
            <p className="text-muted small">Honesty in every research interaction.</p>
          </div>
          <div className="col-md-3">
            <h4 className="fw-bold text-primary mb-2">Innovation</h4>
            <p className="text-muted small">Constant pursuit of scientific frontiers.</p>
          </div>
          <div className="col-md-3">
            <h4 className="fw-bold text-primary mb-2">Inclusion</h4>
            <p className="text-muted small">Diversity across domains and borders.</p>
          </div>
          <div className="col-md-3">
            <h4 className="fw-bold text-primary mb-2">Impact</h4>
            <p className="text-muted small">Meaningful contributions to global knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
