import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import visegrad from '../data/visegrad.json';
import '../styles/main.css';

const Visegrad = () => {
  const [lightbox, setLightbox] = useState(null);

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
        {visegrad.heroImage && (
          <img src={visegrad.heroImage} alt="Visegrad hero" className="visegrad-hero-single-img" />
        )}
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="visegrad-layout">

            {/* Left: text content */}
            <div className="visegrad-text">
              <AnimatedSection delay={0.2}>
                <h3>{visegrad.aboutTitle}</h3>
                <p>{visegrad.aboutText}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3>{visegrad.whatWeDidTitle}</h3>
                <p>{visegrad.whatWeDidText1}</p>
                <p>{visegrad.whatWeDidText2}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <h3>{visegrad.locationTitle}</h3>
                <p>{visegrad.locationText}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <h3>{visegrad.messageTitle}</h3>
                <p>{visegrad.messageText1}</p>
                <p>
                  <strong>{visegrad.messageText2}</strong>
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <h3>{visegrad.getInvolvedTitle}</h3>
                <p>
                  {visegrad.getInvolvedTextBeforeLink}
                  <a href="/contact" style={{ color: 'var(--secondary-color)' }}>{visegrad.getInvolvedLinkText}</a>.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: images grid */}
            <AnimatedSection delay={0.3}>
              <div className="visegrad-images">
                {visegrad.featuredImages.map((src, i) => (
                  <div className="visegrad-img-item" key={i}>
                    <img src={src} alt={`Visegrad event ${i + 1}`} />
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <section className="visegrad-gallery-section">
          <AnimatedSection delay={0.2}>
            <h2 className="visegrad-gallery-title">{visegrad.galleryTitle}</h2>
          </AnimatedSection>
          <div className="visegrad-gallery-grid">
            {visegrad.galleryImages.map((src, i) => (
              <div className="visegrad-gallery-item" key={i} onClick={() => setLightbox(src)}>
                <img src={src} alt={`Visegrad gallery ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="visegrad-drive-btn-wrap">
            <a
              href={visegrad.driveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary visegrad-drive-btn"
            >
              {visegrad.driveButtonText}
            </a>
          </div>
      </section>

      <section className="visegrad-bottom-images">
        {visegrad.bottomImages.slice(0, 2).map((src, i) => (
          <div className="visegrad-bottom-img-wrap" key={i}>
            <img src={src} alt={`Visegrad bottom ${i + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Visegrad;
