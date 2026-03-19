import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/main.css';

const importAll = (ctx) => ctx.keys().map(ctx);
const heroImages = importAll(require.context('../assets/visegrad/hero', false, /\.(png|jpe?g|gif|webp)$/i));
const visegradImages = importAll(require.context('../assets/visegrad/featured', false, /\.(png|jpe?g|gif|webp)$/i));
const galleryImages = importAll(require.context('../assets/visegrad/gallery', false, /\.(png|jpe?g|gif|webp)$/i));
const bottomImages = importAll(require.context('../assets/visegrad/bottom', false, /\.(png|jpe?g|gif|webp)$/i));

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
        {heroImages.length > 0 && (
          <img src={heroImages[0]} alt="Visegrad hero" className="visegrad-hero-single-img" />
        )}
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="visegrad-layout">

            {/* Left: text content */}
            <div className="visegrad-text">
              <AnimatedSection delay={0.2}>
                <h3>About the Event</h3>
                <p>
                  We are pleased to share the successful implementation of a local event under the
                  Visegrad Project ID: <strong>22510078</strong>, coordinated by{' '}
                  <strong>Mission: Reconnect, z.s. &amp; Creative Youth Academy</strong> in Budapest,
                  Hungary, on the <strong>26th of January 2026</strong>.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3>What We Did</h3>
                <p>
                  As part of our ongoing efforts to foster sustainable communities, a dedicated workshop
                  was organized to enhance environmental and ecological awareness among young people. The
                  session focused on building knowledge, encouraging dialogue, and inspiring participants
                  to take an active role in addressing environmental challenges.
                </p>
                <p>
                  Through interactive discussions and practical insights, participants were empowered to
                  engage in community-driven initiatives, particularly in the area of{' '}
                  <strong>community gardening</strong> as a tool for sustainability, cooperation, and
                  local resilience.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <h3>Location &amp; Date</h3>
                <p>Budapest, Hungary — 26 January 2026</p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <h3>Our Message</h3>
                <p>
                  🌍 Together, we are nurturing not only greener spaces, but also more informed and
                  engaged communities.
                </p>
                <p>
                  <strong>#VisegradFund #CommunityGardening #YouthEngagement #Sustainability #EnvironmentalAwareness</strong>
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <h3>Get Involved</h3>
                <p>
                  Interested in participating or learning more about this project? Reach out to us through
                  our <a href="/contact" style={{ color: 'var(--secondary-color)' }}>Contact page</a>.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: 6 images in 2-column grid */}
            <AnimatedSection delay={0.3}>
              <div className="visegrad-images">
                {visegradImages.map((src, i) => (
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
            <h2 className="visegrad-gallery-title">Event Gallery</h2>
          </AnimatedSection>
          <div className="visegrad-gallery-grid">
            {galleryImages.map((src, i) => (
              <div className="visegrad-gallery-item" key={i} onClick={() => setLightbox(src)}>
                <img src={src} alt={`Visegrad gallery ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="visegrad-drive-btn-wrap">
            <a
              href="https://drive.google.com/drive/folders/1NSxRVS-FuLLuUDP1ll-DCeeJzrszvZGk"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary visegrad-drive-btn"
            >
              📸 For more photos of the event, click here
            </a>
          </div>
      </section>

      <section className="visegrad-bottom-images">
        {bottomImages.slice(0, 2).map((src, i) => (
          <div className="visegrad-bottom-img-wrap" key={i}>
            <img src={src} alt={`Visegrad bottom ${i + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Visegrad;
