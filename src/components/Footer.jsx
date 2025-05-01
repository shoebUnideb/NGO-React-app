import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaSpotify } from 'react-icons/fa';
import '../styles/main.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title" style={{ fontFamily: 'Segoe Script, cursive' }}>Creative Youth Academy</h3>
            <p>Go Beyond & Initiative of Dreams</p>
          </div>
          
          <div className="footer-section">
            
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/podcast">Podcast</a></li>
              <li><a href="/ambassadors">Ambassadors</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/cyaeurope/" target="_blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaFacebook />
              </a>
              <a href="https://www.twitter.com/cyaeurope/" target="_blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaTwitter />
              </a>
              <a href="https://www.instagram.com/cya.eu/" target="_blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/cya-eu/?originalSubdomain=hu" target= "blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaLinkedin />
              </a>
              <a href="https://www.youtube.com/cyaeurope/" target= "blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaYoutube />
              </a>
              <a href="https://open.spotify.com/show/09TQZ7q79f4DKPcBpFWuaa?si=5KGxHJybThGkVrRNX5DCmQ&nd=1&dlsi=6f734584120245e0" target= "blank" rel="noreferrer" style={{ color: '#1DB954' ,fmargin: '0 10px', fontSize: '30px'}}><FaSpotify />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Creative Youth Academy. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;