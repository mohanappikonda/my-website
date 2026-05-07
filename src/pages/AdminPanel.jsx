import { FaUsers, FaCheckCircle, FaExclamationTriangle, FaChartPie, FaSearch, FaEllipsisV } from 'react-icons/fa';
import { adminUsers } from '../data/dummy';

const AdminPanel = () => {
  return (
    <div className="container py-5 fade-in">
      <div className="row mb-5 align-items-end">
        <div className="col-lg-7">
          <h1 className="fw-bold mb-3">Admin Control Center</h1>
          <p className="text-muted mb-0">Platform management, user verification, and content moderation.</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 bg-primary text-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <FaUsers className="fs-3 opacity-75" />
              <span className="badge bg-white text-primary small">Total Users</span>
            </div>
            <h2 className="fw-bold mb-1">12,480</h2>
            <small className="opacity-75">↑ 450 this month</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 bg-success text-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <FaCheckCircle className="fs-3 opacity-75" />
              <span className="badge bg-white text-success small">Verified</span>
            </div>
            <h2 className="fw-bold mb-1">8,920</h2>
            <small className="opacity-75">71% Verification rate</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 bg-warning text-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <FaExclamationTriangle className="fs-3 opacity-75" />
              <span className="badge bg-white text-warning small">Pending</span>
            </div>
            <h2 className="fw-bold mb-1">312</h2>
            <small className="opacity-75">Needs approval</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 bg-info text-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <FaChartPie className="fs-3 opacity-75" />
              <span className="badge bg-white text-info small">Active Ops</span>
            </div>
            <h2 className="fw-bold mb-1">3,240</h2>
            <small className="opacity-75">Live collaborations</small>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm overflow-hidden mb-5">
        <div className="card-header bg-white border-bottom p-4 d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0">Recent User Registrations</h5>
          <div className="d-flex gap-3">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light border-end-0 text-muted"><FaSearch /></span>
              <input type="text" className="form-control bg-light border-start-0" placeholder="Filter users..." />
            </div>
            <button className="btn btn-outline-secondary btn-sm rounded px-3">Export</button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light text-muted small text-uppercase">
              <tr>
                <th className="px-4 py-3 border-0">User Info</th>
                <th className="py-3 border-0">Role</th>
                <th className="py-3 border-0">Institution</th>
                <th className="py-3 border-0">Status</th>
                <th className="py-3 border-0">Joined Date</th>
                <th className="px-4 py-3 border-0 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
                        {user.name.charAt(0)}
                      </div>
                      <div className="lh-1">
                        <h6 className="mb-1 small fw-bold">{user.name}</h6>
                        <small className="text-muted x-small">{user.email}</small>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 small">{user.role}</td>
                  <td className="py-3 small text-muted">{user.institution}</td>
                  <td className="py-3">
                    <span className={`badge rounded-pill small px-3 py-1 ${user.status === 'Verified' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 small text-muted">{user.joined}</td>
                  <td className="px-4 py-3 text-end">
                    <button className="btn btn-link text-muted"><FaEllipsisV /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer bg-white border-top p-3 text-center">
          <button className="btn btn-link text-decoration-none small text-muted">View All Registrations</button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            <h6 className="fw-bold mb-4">Content Moderation Queue</h6>
            <div className="alert alert-warning border-0 small mb-3">
              <strong>Flagged Opportunity:</strong> 'Paid Authorship for IEEE' reported for ethical violation.
              <div className="mt-2">
                <button className="btn btn-danger btn-sm rounded me-2">Remove</button>
                <button className="btn btn-outline-secondary btn-sm rounded">Dismiss</button>
              </div>
            </div>
            <div className="alert alert-info border-0 small mb-0">
              <strong>Verification Request:</strong> Dr. Sarah Connor (MIT) requested profile verification.
              <div className="mt-2">
                <button className="btn btn-primary btn-sm rounded me-2">Verify</button>
                <button className="btn btn-outline-secondary btn-sm rounded">Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            <h6 className="fw-bold mb-4">Platform System Health</h6>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1 small">
                <span>Database Load</span>
                <span className="fw-bold text-success">Normal</span>
              </div>
              <div className="progress" style={{ height: '6px' }}>
                <div className="progress-bar bg-success" style={{ width: '24%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1 small">
                <span>Messaging Latency</span>
                <span className="fw-bold text-success">Healthy</span>
              </div>
              <div className="progress" style={{ height: '6px' }}>
                <div className="progress-bar bg-success" style={{ width: '12%' }}></div>
              </div>
            </div>
            <div className="mb-0">
              <div className="d-flex justify-content-between mb-1 small">
                <span>Storage Capacity</span>
                <span className="fw-bold text-warning">68% Used</span>
              </div>
              <div className="progress" style={{ height: '6px' }}>
                <div className="progress-bar bg-warning" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
