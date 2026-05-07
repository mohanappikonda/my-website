import { FaThLarge, FaProjectDiagram, FaEnvelope, FaChartBar, FaUserCircle, FaBell, FaSignOutAlt, FaPlus, FaCheckCircle, FaClock } from 'react-icons/fa';
import { opportunities, messages } from '../data/dummy';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const chartData = [
  { name: 'Jan', citations: 400, pubs: 2 },
  { name: 'Feb', citations: 450, pubs: 3 },
  { name: 'Mar', citations: 600, pubs: 2 },
  { name: 'Apr', citations: 800, pubs: 5 },
  { name: 'May', citations: 950, pubs: 4 },
  { name: 'Jun', citations: 1100, pubs: 6 },
];

const Dashboard = () => {
  return (
    <div className="d-flex fade-in" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar d-none d-lg-block">
        <div className="p-4 border-bottom mb-4">
          <div className="d-flex align-items-center gap-3">
            <img src="/profile_pic.png" alt="Profile" className="rounded-circle shadow-sm" style={{ width: '50px', height: '50px', objectFit: 'cover', objectPosition: 'center 15%' }} />
            <div className="lh-1">
              <h6 className="fw-bold mb-1">Dr. Appikonda Mohan</h6>
              <small className="text-muted">NIT Trichy / MNIT Jaipur</small>
            </div>
          </div>
        </div>
        <nav className="px-3">
          <ul className="list-unstyled">
            <li className="mb-2">
              <button className="btn btn-primary w-100 text-start d-flex align-items-center gap-3 py-2 px-3 border-0">
                <FaThLarge /> Dashboard
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link w-100 text-start text-decoration-none text-muted d-flex align-items-center gap-3 py-2 px-3 hover-bg-light">
                <FaProjectDiagram /> My Projects
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link w-100 text-start text-decoration-none text-muted d-flex align-items-center gap-3 py-2 px-3 hover-bg-light">
                <FaEnvelope /> Messages <span className="badge bg-danger rounded-pill ms-auto">2</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link w-100 text-start text-decoration-none text-muted d-flex align-items-center gap-3 py-2 px-3 hover-bg-light">
                <FaChartBar /> Analytics
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link w-100 text-start text-decoration-none text-muted d-flex align-items-center gap-3 py-2 px-3 hover-bg-light">
                <FaUserCircle /> Profile Settings
              </button>
            </li>
            <li className="mt-5">
              <button className="btn btn-link w-100 text-start text-decoration-none text-danger d-flex align-items-center gap-3 py-2 px-3 hover-bg-danger-subtle">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 p-lg-5 bg-light">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5 gap-3">
          <div>
            <h2 className="fw-bold mb-1">Welcome back, Dr. Appikonda</h2>
            <p className="text-muted mb-0">Here's what's happening with your research today.</p>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-white border shadow-sm rounded-pill px-3 d-flex align-items-center gap-2">
              <FaBell className="text-muted" /> Notifications
            </button>
            <button className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2">
              <FaPlus /> New Opportunity
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 h-100">
              <small className="text-muted fw-bold text-uppercase mb-2">Total Citations</small>
              <h2 className="fw-bold mb-1">850</h2>
              <span className="text-success small fw-bold">↑ 8% this month</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 h-100">
              <small className="text-muted fw-bold text-uppercase mb-2">Active Collaborations</small>
              <h2 className="fw-bold mb-1">15</h2>
              <span className="text-primary small fw-bold">5 New requests</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 h-100">
              <small className="text-muted fw-bold text-uppercase mb-2">Publication Score</small>
              <h2 className="fw-bold mb-1">78.2</h2>
              <span className="text-info small fw-bold">NPTEL Star</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-4 h-100">
              <small className="text-muted fw-bold text-uppercase mb-2">Projects</small>
              <h2 className="fw-bold mb-1">12</h2>
              <span className="text-muted small">Updated 1h ago</span>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Charts */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4 mb-4">
              <h5 className="fw-bold mb-4">Research Impact Trend</h5>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorCitations" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="citations" stroke="#4f46e5" fillOpacity={1} fill="url(#colorCitations)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card border-0 shadow-sm p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Academic Profile & Resume</h5>
                <span className="badge bg-success-subtle text-success">Verified Researcher</span>
              </div>
              
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Full Name</label>
                  <input type="text" className="form-control form-control-sm" defaultValue="Dr. Appikonda Mohan Durga Kumar" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Institution</label>
                  <input type="text" className="form-control form-control-sm" defaultValue="NIT Tiruchirappalli / MNIT Jaipur" />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold">Research Interests (Comma separated)</label>
                  <input type="text" className="form-control form-control-sm" defaultValue="Quantum Computing, Power Electronics, Renewable Energy, Qiskit, AI/ML" />
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="p-3 border rounded-3 bg-light bg-opacity-50 h-100">
                    <h6 className="fw-bold small mb-2">Resume / Curriculum Vitae</h6>
                    <p className="small text-muted mb-3">Upload your latest academic CV in PDF format.</p>
                    <div className="d-flex flex-column gap-2">
                      <div className="input-group input-group-sm">
                        <input type="file" className="form-control" id="resumeUpload" accept=".pdf" />
                        <label className="input-group-text" htmlFor="resumeUpload">Upload PDF</label>
                      </div>
                      <div className="bg-white border p-2 rounded d-flex align-items-center gap-2 mt-2">
                        <Icons.FaFilePdf className="text-danger" />
                        <span className="small text-truncate">Appikonda_Mohan_CV.pdf</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded-3 bg-light bg-opacity-50 h-100">
                    <h6 className="fw-bold small mb-2">Profile Visibility</h6>
                    <p className="small text-muted mb-3">Your profile is visible to recruiters and potential collaborators.</p>
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="visibilitySwitch" defaultChecked />
                      <label className="form-check-label small" htmlFor="visibilitySwitch">Public Profile</label>
                    </div>
                    <button className="btn btn-primary btn-sm rounded-pill px-4 w-100">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="fw-bold mb-4">Recent Collaboration Requests</h5>
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="px-4 py-3 border-0 small text-uppercase">Researcher</th>
                      <th className="py-3 border-0 small text-uppercase">Project</th>
                      <th className="py-3 border-0 small text-uppercase">Date</th>
                      <th className="py-3 border-0 small text-uppercase">Status</th>
                      <th className="px-4 py-3 border-0 small text-uppercase text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map(i => (
                      <tr key={i}>
                        <td className="px-4 py-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '35px', height: '35px', fontSize: '0.8rem' }}>AS</div>
                            <div className="lh-1">
                              <h6 className="mb-0 small fw-bold">Dr. Ananya S.</h6>
                              <small className="text-muted x-small">IISc Bangalore</small>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 small text-truncate" style={{ maxWidth: '200px' }}>Quantum Cryptography Protocol</td>
                        <td className="py-3 small text-muted">May 05, 2026</td>
                        <td className="py-3"><span className="badge bg-warning-subtle text-warning small px-2">Pending</span></td>
                        <td className="px-4 py-3 text-end">
                          <button className="btn btn-outline-primary btn-sm rounded-pill px-3">Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-4">Recent Activity</h5>
              <div className="activity-timeline">
                <div className="d-flex gap-3 mb-4">
                  <div className="text-success mt-1"><FaCheckCircle /></div>
                  <div>
                    <h6 className="mb-1 small fw-bold">Opportunity Approved</h6>
                    <p className="text-muted x-small mb-0">Your post 'Smart Grid AI' is now live.</p>
                    <small className="text-muted x-small">2 hours ago</small>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-4">
                  <div className="text-primary mt-1"><FaEnvelope /></div>
                  <div>
                    <h6 className="mb-1 small fw-bold">New Message</h6>
                    <p className="text-muted x-small mb-0">Prof. Suresh Babu sent a message.</p>
                    <small className="text-muted x-small">5 hours ago</small>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-4">
                  <div className="text-info mt-1"><FaClock /></div>
                  <div>
                    <h6 className="mb-1 small fw-bold">Meeting Reminder</h6>
                    <p className="text-muted x-small mb-0">Project discussion at 4:00 PM today.</p>
                    <small className="text-muted x-small">8 hours ago</small>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline-secondary w-100 mt-auto btn-sm rounded-pill">View All Activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
