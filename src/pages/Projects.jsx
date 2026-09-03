import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import projectsData from '../data/projects.json';
import '../styles/main.css';

const effectiveLink = (project) => (project.pageSlug ? `/projects/${project.pageSlug}` : project.link);

const Projects = () => {
  const featured = projectsData.projects.find((p) => p.featured);
  const projects = projectsData.projects.filter((p) => !p.featured);

  return (
    <div className="projects-page">

      <AnimatedSection>
        <div className="projects-featured-wrap">
          <div className="projects-featured-card">
            <div className="projects-featured-image">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="projects-featured-content">
              <span className="projects-featured-badge">Featured Project</span>
              <h2>{featured.title}</h2>
              <div className="project-tags">
                {featured.tags.map((tag, i) => <span key={i}>{tag}</span>)}
              </div>
              <Link to={effectiveLink(featured)} className="btn btn-primary">View Project</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="projects-list">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={effectiveLink(project)}
                />
              </AnimatedSection>
            ))}
          </div>
      </section>
    </div>
  );
};

export default Projects;