import { FaChartLine, FaQuoteLeft, FaBook, FaGlobeAmericas, FaAward } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const pubData = [
  { name: '2021', papers: 12, citations: 150 },
  { name: '2022', papers: 15, citations: 280 },
  { name: '2023', papers: 18, citations: 450 },
  { name: '2024', papers: 22, citations: 620 },
  { name: '2025', papers: 25, citations: 840 },
];

const domainData = [
  { name: 'AI/ML', value: 45 },
  { name: 'Quantum', value: 20 },
  { name: 'IoT', value: 15 },
  { name: 'Energy', value: 20 },
];

const COLORS = ['#4f46e5', '#7c3aed', '#059669', '#d97706'];

const Analytics = () => {
  return (
    <div className="container section-padding fade-in">
      <div className="row mb-5">
        <div className="col-lg-7">
          <h1 className="fw-bold mb-3">Research Impact Analytics</h1>
          <p className="text-muted">Comprehensive visual analytics of your research output, collaboration network, and academic growth.</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-4">Citations & Publications Growth</h5>
            <div style={{ width: '100%', height: 350 }}>
              <ResponsiveContainer>
                <BarChart data={pubData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="citations" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="papers" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-4">Research Area Distribution</h5>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={domainData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {domainData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              {domainData.map((entry, index) => (
                <div key={entry.name} className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span className="small text-muted">{entry.name}</span>
                  </div>
                  <span className="small fw-bold">{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 text-center">
            <FaQuoteLeft className="text-primary fs-3 mb-3 mx-auto" />
            <h3 className="fw-bold mb-1">2.3k</h3>
            <p className="text-muted small mb-0">Total Citations</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 text-center">
            <FaBook className="text-info fs-3 mb-3 mx-auto" />
            <h3 className="fw-bold mb-1">87</h3>
            <p className="text-muted small mb-0">Total Publications</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 text-center">
            <FaGlobeAmericas className="text-success fs-3 mb-3 mx-auto" />
            <h3 className="fw-bold mb-1">15</h3>
            <p className="text-muted small mb-0">Partner Countries</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4 text-center">
            <FaAward className="text-warning fs-3 mb-3 mx-auto" />
            <h3 className="fw-bold mb-1">24</h3>
            <p className="text-muted small mb-0">h-index</p>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm p-5 bg-primary text-white rounded-4 overflow-hidden position-relative">
        <div className="position-relative z-1">
          <h3 className="fw-bold mb-3">Want more detailed analytics?</h3>
          <p className="lead mb-4 opacity-75">Connect your ORCID and Google Scholar profiles to automatically sync citations and track your global research ranking.</p>
          <button className="btn btn-light btn-lg rounded-pill px-5 text-primary fw-bold">Connect Profiles</button>
        </div>
        <div className="position-absolute top-0 end-0 p-5 opacity-10">
          <FaChartLine style={{ fontSize: '15rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
