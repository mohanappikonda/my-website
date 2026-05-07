import { useState } from 'react';
import { FaSearch, FaPaperPlane, FaPaperclip, FaEllipsisV, FaCircle } from 'react-icons/fa';
import { messages } from '../data/dummy';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(messages[0]);

  return (
    <div className="container py-5 fade-in">
      <div className="card border-0 shadow-sm overflow-hidden" style={{ height: '80vh' }}>
        <div className="row g-0 h-100">
          {/* Contacts List */}
          <div className="col-lg-4 border-end h-100 d-flex flex-column">
            <div className="p-4 border-bottom">
              <h4 className="fw-bold mb-4">Messages</h4>
              <div className="input-group bg-light rounded-pill px-3 py-1">
                <span className="input-group-text bg-transparent border-0 text-muted"><FaSearch /></span>
                <input type="text" className="form-control bg-transparent border-0 small" placeholder="Search discussions..." />
              </div>
            </div>
            <div className="overflow-auto flex-grow-1">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`p-4 border-bottom cursor-pointer hover-bg-light transition ${selectedChat.id === msg.id ? 'bg-primary bg-opacity-10' : ''}`}
                  onClick={() => setSelectedChat(msg)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="d-flex gap-3">
                    <div className="position-relative">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '50px', height: '50px', backgroundColor: msg.color }}>
                        {msg.avatar}
                      </div>
                      {msg.unread && <FaCircle className="text-danger position-absolute top-0 end-0 border border-white border-2 rounded-circle" style={{ fontSize: '10px' }} />}
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className={`mb-0 small fw-bold ${msg.unread ? 'text-main' : 'text-muted'}`}>{msg.from}</h6>
                        <span className="x-small text-muted">{msg.time}</span>
                      </div>
                      <p className="small text-muted mb-0 text-truncate">{msg.preview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-lg-8 h-100 d-flex flex-column bg-white">
            {selectedChat ? (
              <>
                <div className="p-4 border-bottom d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '45px', height: '45px', backgroundColor: selectedChat.color }}>
                      {selectedChat.avatar}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{selectedChat.from}</h6>
                      <small className="text-success x-small">Online</small>
                    </div>
                  </div>
                  <button className="btn btn-link text-muted"><FaEllipsisV /></button>
                </div>

                <div className="flex-grow-1 overflow-auto p-4 bg-light bg-opacity-50">
                  <div className="text-center mb-4">
                    <span className="badge bg-white text-muted fw-normal border px-3">Today</span>
                  </div>
                  
                  {/* Dummy Chat Bubbles */}
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-start gap-3" style={{ maxWidth: '80%' }}>
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style={{ width: '35px', height: '35px', backgroundColor: selectedChat.color }}>
                        {selectedChat.avatar}
                      </div>
                      <div className="bg-white p-3 rounded-4 shadow-sm border">
                        <p className="small mb-0">{selectedChat.preview}</p>
                        <small className="text-muted x-small d-block text-end mt-1">10:32 AM</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 ms-auto" style={{ maxWidth: '80%' }}>
                      <div className="bg-primary p-3 rounded-4 shadow-sm text-white">
                        <p className="small mb-0">Hello Professor, thank you for reaching out. I have reviewed the project details and I'm very interested in the contribution roles you mentioned. When would be a good time for a brief technical discussion?</p>
                        <small className="text-white text-opacity-75 x-small d-block text-end mt-1">10:45 AM</small>
                      </div>
                      <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style={{ width: '35px', height: '35px' }}>
                        MK
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-top">
                  <div className="input-group bg-light rounded-pill px-3 py-2 border">
                    <button className="btn btn-link text-muted p-0 me-3"><FaPaperclip /></button>
                    <input type="text" className="form-control bg-transparent border-0 small" placeholder="Type your message..." />
                    <button className="btn btn-primary rounded-circle ms-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <FaPaperPlane size={14} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-100 d-flex align-items-center justify-content-center text-center">
                <div>
                  <FaEnvelope className="display-1 text-muted opacity-25 mb-4" />
                  <h4 className="fw-bold">Your Messages</h4>
                  <p className="text-muted">Select a conversation to start chatting.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
