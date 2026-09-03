import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import HomeForm from './forms/HomeForm';
import AboutForm from './forms/AboutForm';
import ContactForm from './forms/ContactForm';
import ProjectsForm from './forms/ProjectsForm';
import AmbassadorsForm from './forms/AmbassadorsForm';
import PodcastsForm from './forms/PodcastsForm';
import GalleryForm from './forms/GalleryForm';
import ProjectPagesForm from './forms/ProjectPagesForm';
import SiteForm from './forms/SiteForm';

const SECTIONS = [
  { id: 'home', label: 'Home Page', Component: HomeForm },
  { id: 'about', label: 'About Page', Component: AboutForm },
  { id: 'contact', label: 'Contact Page', Component: ContactForm },
  { id: 'projects', label: 'Projects', Component: ProjectsForm },
  { id: 'projectPages', label: 'Project Pages', Component: ProjectPagesForm },
  { id: 'ambassadors', label: 'Ambassadors', Component: AmbassadorsForm },
  { id: 'podcasts', label: 'Podcasts', Component: PodcastsForm },
  { id: 'gallery', label: 'Gallery', Component: GalleryForm },
  { id: 'site', label: 'Site-wide (Navbar & Footer)', Component: SiteForm },
];

const Dashboard = () => {
  const { logout } = useAuth();
  const [activeId, setActiveId] = useState('home');
  const active = SECTIONS.find((s) => s.id === activeId);
  const ActiveForm = active.Component;

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <img src="/logo.png" alt="Creative Youth Academy" />
          <span>CYA Content</span>
        </div>
        <nav className="admin-sidebar-nav">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              className={`admin-sidebar-link ${section.id === activeId ? 'active' : ''}`}
              onClick={() => setActiveId(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <button className="admin-sidebar-logout" onClick={logout}>Sign out</button>
      </aside>

      <main className="admin-main">
        <ActiveForm key={activeId} />
      </main>
    </div>
  );
};

export default Dashboard;
