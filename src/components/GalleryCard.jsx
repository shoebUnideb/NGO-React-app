import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ image, title, videoLink, floating }) => {
  return (
    <motion.div 
      className={`gallery-card ${floating ? 'floating' : ''}`}
      whileHover={{ scale: 1.05 }}
      initial={floating ? { y: -10 } : {}}
      animate={floating ? { 
        y: [0, -15, 0],
        transition: { 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : {}}
    >
      <div className="gallery-image-container">
        <img src={image} alt={title} className="gallery-image" />
        {videoLink && (
          <a 
            href={videoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="video-link"
          >
            <i className="fas fa-play"></i>
          </a>
        )}
      </div>
      {title && <h3 className="gallery-title">{title}</h3>}
    </motion.div>
  );
};

export default GalleryCard;