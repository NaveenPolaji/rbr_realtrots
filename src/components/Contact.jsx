import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <div className="page-container contact-page">
      <h2>Contact Us</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>RBR_REALTROTS</h3>
          <p>🏢 Hyderabad, Telangana</p>
          <p>📞 +91 9505954373</p>
          <p>📧 contact@rbrrealtrot.com</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;