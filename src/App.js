import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Only import what you need
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Podcast from './pages/Podcast';
import Ambassadors from './pages/Ambassadors';
import Gallery from './pages/Gallery';
import Visegrad from './pages/Visegrad';
import './App.css';
import './styles/main.css';
import './styles/animations.css';
import './styles/responsive.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/ambassadors" element={<Ambassadors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/visegrad" element={<Visegrad />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;