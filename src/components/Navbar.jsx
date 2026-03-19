import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/main.css';

const FULL_TEXT = 'CYA - Creative Youth Academy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayedText, setDisplayedText] = useState(FULL_TEXT);
  const intervalRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter erase/restore effect on scroll
  useEffect(() => {
    clearInterval(intervalRef.current);
    if (scrolled) {
      // Erase character by character
      intervalRef.current = setInterval(() => {
        setDisplayedText(prev => {
          if (prev.length === 0) {
            clearInterval(intervalRef.current);
            return '';
          }
          return prev.slice(0, -1);
        });
      }, 30);
    } else {
      // Restore character by character
      intervalRef.current = setInterval(() => {
        setDisplayedText(prev => {
          if (prev.length >= FULL_TEXT.length) {
            clearInterval(intervalRef.current);
            return FULL_TEXT;
          }
          return FULL_TEXT.slice(0, prev.length + 1);
        });
      }, 30);
    }
    return () => clearInterval(intervalRef.current);
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About ' },
    { path: '/projects', name: 'Projects' },
    { path: '/podcast', name: 'Podcast' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/ambassadors', name: 'Ambassadors' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/" className="logo">
          <img 
            src="/assets/images/logo.png" 
            alt="Creative Youth Academy Logo" 
            className="logo-image"
          />
          {displayedText.length > 0 && (
            <span className="logo-text" style={{ marginBottom: '10px', color: '#212529', fontFamily: 'Segoe Script, cursive' }}>
              {displayedText}
            </span>
          )}
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;