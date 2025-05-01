import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/main.css';

const Contact = () => {
  // Formspree integration
  const [state, handleSubmit] = useForm("xpwdqgqd");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Show success message when form is submitted successfully
  if (state.succeeded) {
    return (
      <div className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <AnimatedSection>
              <h1 className="section-title">Contact Us</h1>
              <p className="subtitle">
                Have questions or want to get involved? We'd love to hear from you!
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="contact-content">
          <div className="container">
            <AnimatedSection>
              <div className="success-message">
                <h2>Thank you for subscribing!</h2>
                <p>We have received your message and will get back to you soon.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Send another message
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Contact Us</h1>
            <p className="subtitle">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection delay={0.2}>
              <div className="contact-form">
                <h2>Subscribe to the Newsletter</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Do you consent that we send you about the updates?</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={state.submitting}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="contact-info">
                <h2>Contact Information</h2>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>1078 Budapest,
                    Hungary</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+36 20 414 6517</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@becya.org</p>
                  </div>
                </div>
                
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
   </div>
  );
};

export default Contact;