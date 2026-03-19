import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        {link.startsWith('/') ? (
          <Link to={link} className="btn btn-primary">View Project</Link>
        ) : (
          <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;