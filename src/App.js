import React, { Suspense, lazy } from 'react';
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
import ProjectPage from './pages/ProjectPage';
import './App.css';
import './styles/main.css';
import './styles/animations.css';
import './styles/responsive.css';

const AdminApp = lazy(() => import('./admin/AdminApp'));

function PublicSite() {
  return (
    <div className="app">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/ambassadors" element={<Ambassadors />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/cms-66a9392433dd8765/*"
          element={(
            <Suspense fallback={null}>
              <AdminApp />
            </Suspense>
          )}
        />
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </Router>
  );
}

export default App;