import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container section-padding fade-in">
      <div className="row mb-5 justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold mb-3">Get in Touch</h1>
          <p className="lead text-muted">Have questions about our platform or ethical research collaboration? We're here to help.</p>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-4">Contact Information</h5>
            
            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="bg-primary-subtle p-2 rounded">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Email Us</h6>
                <p className="text-muted small mb-0">contact@researchnexus.ac.in</p>
                <p className="text-muted small mb-0">support@researchnexus.ac.in</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="bg-success-subtle p-2 rounded">
                <FaPhone className="text-success" />
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Call Us</h6>
                <p className="text-muted small mb-0">+91 80 4567 8900</p>
                <p className="text-muted small mb-0">Mon - Fri, 9am - 6pm IST</p>
              </div>
            </div>

                <div className="d-flex align-items-center gap-4 p-4 border rounded-4 hover-bg-light transition cursor-pointer">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Our Office</h6>
                    <p className="text-muted small mb-0">Seetharampuram, Narsapur, West Godavari, Andhra Pradesh 534280, India</p>
                  </div>
                </div>

            <hr className="my-4" />
            
            <h6 className="fw-bold mb-3 small text-uppercase text-muted">Connect Socially</h6>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-secondary rounded-circle p-2"><FaTwitter /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle p-2"><FaLinkedin /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle p-2"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-5">
            <h5 className="fw-bold mb-4">Send us a Message</h5>
            <form>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Your Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Email Address</label>
                  <input type="email" className="form-control" placeholder="john@university.edu" />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold">Subject</label>
                <select className="form-select">
                  <option>Collaboration Inquiry</option>
                  <option>Technical Support</option>
                  <option>Ethical Violation Report</option>
                  <option>Partnership Proposal</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold">Message</label>
                <textarea className="form-control" rows="6" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
