import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const AmbassadorCard = ({ image, name, socialLinks }) => {
  return (
    <motion.div 
      className="ambassador-card"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="ambassador-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="ambassador-name">{name}</h3>
      <div className="social-links">
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default AmbassadorCard;