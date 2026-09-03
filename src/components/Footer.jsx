import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaSpotify } from 'react-icons/fa';
import site from '../data/site.json';
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
            <h3 className="footer-title" style={{ fontFamily: 'Segoe Script, cursive' }}>{site.footerOrgName}</h3>
            <p>{site.footerTagline}</p>
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
            <h3 className="footer-title">{site.footerConnectTitle}</h3>
            <div className="social-links">
              <a href={site.socialLinks.facebook} target="_blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaFacebook />
              </a>
              <a href={site.socialLinks.twitter} target="_blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaTwitter />
              </a>
              <a href={site.socialLinks.instagram} target="_blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaInstagram />
              </a>
              <a href={site.socialLinks.linkedin} target= "blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaLinkedin />
              </a>
              <a href={site.socialLinks.youtube} target= "blank" rel="noreferrer" style={{ fmargin: '0 10px', fontSize: '30px'}}><FaYoutube />
              </a>
              <a href={site.socialLinks.spotify} target= "blank" rel="noreferrer" style={{ color: '#1DB954' ,fmargin: '0 10px', fontSize: '30px'}}><FaSpotify />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {site.footerOrgName}. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;