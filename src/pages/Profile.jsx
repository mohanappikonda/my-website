import { FaGraduationCap, FaCertificate, FaAward, FaBook, FaGlobe, FaEnvelope, FaPhone, FaLink, FaDownload, FaQuoteRight, FaChartLine } from 'react-icons/fa';
import { researchers, publications } from '../data/dummy';

const Profile = () => {
  const user = researchers[0]; // Using Dr. Appikonda's profile

  return (
    <div className="container section-padding fade-in">
      <div className="row g-5">
        {/* Left Column: Brief Info */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 text-center mb-4 profile-card-glow">
            {user.image ? (
              <img src={user.image} alt={user.name} className="mx-auto rounded-circle mb-3 shadow-lg border border-4 border-white" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            ) : (
              <div className="bg-primary mx-auto text-white rounded-circle d-flex align-items-center justify-content-center fw-bold mb-3 shadow-sm" style={{ width: '120px', height: '120px', fontSize: '2.5rem' }}>
                MK
              </div>
            )}
            <h3 className="fw-bold mb-1">{user.name}</h3>
            <p className="text-primary fw-medium mb-3">{user.title}</p>
            <p className="small text-muted mb-4">{user.bio}</p>
            
            <div className="d-flex justify-content-center gap-3 mb-4">
              <button className="btn btn-primary rounded-pill px-4 btn-sm d-flex align-items-center gap-2 shadow-sm">
                <FaDownload /> Download CV
              </button>
              <button className="btn btn-outline-secondary rounded-pill px-4 btn-sm">Message</button>
            </div>

            <hr />

            <div className="text-start mt-4">
              <h6 className="fw-bold small text-uppercase text-muted mb-3">Contact Details</h6>
              <div className="d-flex align-items-center gap-3 mb-2 small">
                <FaEnvelope className="text-primary" /> <span>{user.email}</span>
              </div>
              <div className="d-flex align-items-center gap-3 mb-2 small">
                <FaPhone className="text-primary" /> <span>{user.contact}</span>
              </div>
              <div className="d-flex align-items-center gap-3 small">
                <FaGlobe className="text-primary" /> <span>Bhimavaram, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4 mb-4">
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <FaChartLine className="text-primary" /> Research Metrics
            </h6>
            <div className="row text-center g-2">
              <div className="col-4">
                <div className="p-2 bg-light rounded-3">
                  <div className="h4 fw-bold mb-0 text-primary">{user.citations}</div>
                  <div className="x-small text-muted text-uppercase">Citations</div>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2 bg-light rounded-3">
                  <div className="h4 fw-bold mb-0 text-primary">{user.hIndex}</div>
                  <div className="x-small text-muted text-uppercase">h-index</div>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2 bg-light rounded-3">
                  <div className="h4 fw-bold mb-0 text-primary">{user.i10Index}</div>
                  <div className="x-small text-muted text-uppercase">i10-index</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4">
            <h6 className="fw-bold mb-3">Research Skills</h6>
            <div className="d-flex flex-wrap gap-2">
              {user.skills.map((skill, i) => (
                <span key={i} className="badge bg-light text-muted fw-normal border">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Info */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-5 mb-4 position-relative overflow-hidden">
            <div className="position-absolute top-0 end-0 p-4 text-primary opacity-10">
              <FaQuoteRight size={80} />
            </div>
            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <FaGlobe className="text-primary" /> Career Objective
            </h4>
            <p className="text-muted italic fs-5 position-relative z-1">"{user.careerObjective}"</p>
          </div>

          <div className="card border-0 shadow-sm p-5 mb-4">
            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <FaGraduationCap className="text-primary" /> Educational Qualifications
            </h4>
            <div className="timeline-profile">
              {user.education.map((edu, i) => (
                <div key={i} className="mb-4 ps-4 border-start border-primary border-2 position-relative">
                  <div className="position-absolute top-0 start-0 translate-middle-x bg-primary rounded-circle" style={{ width: '12px', height: '12px', marginLeft: '-1px' }}></div>
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="fw-bold mb-1">{edu.degree}</h5>
                    <span className="badge bg-primary bg-opacity-10 text-primary">{edu.year}</span>
                  </div>
                  <h6 className="text-muted mb-2">{edu.institution}</h6>
                  <p className="small text-muted mb-0"><strong>Focus:</strong> {edu.topic}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-0 shadow-sm p-5 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
                <FaCertificate className="text-primary" /> NPTEL Certifications
              </h4>
              <span className="badge bg-warning text-dark px-3 py-2 shadow-sm">DISCIPLINE STAR</span>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-sm small">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Score</th>
                    <th>Division</th>
                  </tr>
                </thead>
                <tbody>
                  {user.nptelCertifications.map((cert, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{cert.subject}</td>
                      <td className="fw-bold">{cert.score}</td>
                      <td>
                        <span className={`badge ${cert.division === 'Silver' ? 'bg-secondary text-white' : cert.division === 'Elite' ? 'bg-primary text-white' : 'bg-light text-muted border'}`}>
                          {cert.division}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-5 mb-4">
            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <FaCertificate className="text-primary" /> Research Specializations
            </h4>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-3 border rounded-3 bg-light bg-opacity-50 h-100 transition hover-shadow-sm">
                  <h6 className="fw-bold mb-1">Quantum Technologies</h6>
                  <p className="small text-muted mb-0">AICTE QIP PG - MNIT Jaipur (2026)</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded-3 bg-light bg-opacity-50 h-100 transition hover-shadow-sm">
                  <h6 className="fw-bold mb-1">Power Electronics</h6>
                  <p className="small text-muted mb-0">High Voltage Gain DC-DC Converters</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-5">
            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <FaBook className="text-primary" /> Featured Publications
            </h4>
            <ul className="list-unstyled">
              {publications.slice(0, 5).map((pub, i) => (
                <li key={i} className="mb-3 d-flex align-items-start gap-3 p-3 rounded-3 hover-bg-light border border-transparent hover-border-light transition shadow-sm-hover">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded small fw-bold" style={{ minWidth: '35px', textAlign: 'center' }}>{i+1}</div>
                  <div>
                    <h6 className="fw-bold mb-1">{pub.title}</h6>
                    <p className="small text-muted mb-1">{pub.authors}</p>
                    <div className="d-flex align-items-center gap-3">
                      <small className="text-primary fw-medium">{pub.journal} ({pub.year})</small>
                      {pub.citations > 0 && (
                        <small className="text-muted"><FaQuoteRight className="x-small me-1" /> Cited by {pub.citations}</small>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <a href="/publications" className="btn btn-outline-primary btn-sm rounded-pill px-4 mt-3">View All {publications.length} Publications</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
