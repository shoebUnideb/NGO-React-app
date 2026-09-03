import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import projectPagesData from '../data/projectPages.json';
import '../styles/main.css';

const TextBlock = ({ block }) => (
  <section className="about-mission">
    <div className="container">
      <div className="visegrad-text">
        <AnimatedSection delay={0.2}>
          {block.heading && <h3>{block.heading}</h3>}
          {block.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const GalleryBlock = ({ block, onImageClick }) => (
  <section className="visegrad-gallery-section">
    {block.heading && (
      <AnimatedSection delay={0.2}>
        <h2 className="visegrad-gallery-title">{block.heading}</h2>
      </AnimatedSection>
    )}
    <div className="visegrad-gallery-grid">
      {block.images.map((src, i) => (
        <div className="visegrad-gallery-item" key={i} onClick={() => onImageClick(src)}>
          <img src={src} alt={`${block.heading || 'Gallery'} ${i + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

const CtaBlock = ({ block }) => (
  <section className="about-mission">
    <div className="container">
      <div className="visegrad-text">
        <AnimatedSection delay={0.2}>
          {block.heading && <h3>{block.heading}</h3>}
          {block.text && <p>{block.text}</p>}
          {block.buttonText && (
            block.buttonLink && block.buttonLink.startsWith('/') ? (
              <a href={block.buttonLink} className="btn btn-primary visegrad-drive-btn">{block.buttonText}</a>
            ) : (
              <a href={block.buttonLink} target="_blank" rel="noreferrer" className="btn btn-primary visegrad-drive-btn">
                {block.buttonText}
              </a>
            )
          )}
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const ProjectPage = () => {
  const { slug } = useParams();
  const [lightbox, setLightbox] = useState(null);
  const page = projectPagesData.pages.find((p) => p.slug === slug);

  if (!page) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="projects-page">
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&#x2715;</button>
          <img
            src={lightbox}
            alt="Enlarged"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="visegrad-hero">
        {page.heroImage && (
          <img src={page.heroImage} alt={page.title} className="visegrad-hero-single-img" />
        )}
      </section>

      {page.blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        if (block.type === 'text') return <TextBlock key={key} block={block} />;
        if (block.type === 'cta') return <CtaBlock key={key} block={block} />;
        if (block.type === 'gallery') return <GalleryBlock key={key} block={block} onImageClick={setLightbox} />;
        return null;
      })}
    </div>
  );
};

export default ProjectPage;
