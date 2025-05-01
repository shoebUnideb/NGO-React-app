import React from 'react';
import { motion } from 'framer-motion';

const PodcastCard = ({ thumbnail, title, youtubeLink }) => {
  return (
    <motion.div 
      className="podcast-card"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="podcast-thumbnail">
        <img src={thumbnail} alt={title} />
        
      </div>
      <h3 className="podcast-title">{title}</h3>
      <a 
        href={youtubeLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-outline"
      >
        Watch on YouTube
      </a>
    </motion.div>
  );
};

export default PodcastCard;