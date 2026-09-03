import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PodcastCard from '../components/PodcastCard';
import GalleryCard from '../components/GalleryCard';
import home from '../data/home.json';
import podcastsData from '../data/podcasts.json';
import galleryData from '../data/gallery.json';
import '../styles/main.css';

const Home = () => {
  const podcastPreview = podcastsData.podcasts.slice(0, 3);
  const galleryPreview = galleryData.gallery.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section with GIF Background */}
      <section className="hero">
        <div className="hero-background">
          <img
            src={home.hero.backgroundGif}
            alt="Animated background"
            className="hero-gif"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <AnimatedSection>
            <div className="hero-content">
              <h1 className="hero-title">
                {home.hero.title}
              </h1>
              <p className="hero-subtitle">
                {home.hero.subtitle}
              </p>
              <div className="hero-buttons">
                <Link to={home.hero.primaryButtonLink} className="btn btn-primary">{home.hero.primaryButtonText}</Link>
                <Link to={home.hero.secondaryButtonLink} className="btn">{home.hero.secondaryButtonText}</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="section-title-new">{home.focusTitle}</h2>
          </AnimatedSection>

          <div className="features-grid">
            {home.focusAreas.map((area, index) => (
              <AnimatedSection key={index} delay={index * 0.1 + 0.3}>
                <div className="feature-card">
                  <div className={`feature-icon ${area.animation}`}>
                    <i className={area.icon}></i>
                  </div>
                  <h3>{area.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <AnimatedSection delay={0.2}>
              <h2 className="section-title">{home.aboutPreview.title}</h2>
              <div className="about-highlights">
                <div className="highlight-item">
                  <h3>{home.aboutPreview.missionTitle}</h3>
                  <p>{home.aboutPreview.missionText}</p>
                </div>
                <div className="highlight-item">
                  <h3>{home.aboutPreview.visionTitle}</h3>
                  <p>{home.aboutPreview.visionText}</p>
                </div>
                <div className="highlight-item">
                  <h3>{home.aboutPreview.diversityTitle}</h3>
                  <p>
                    {home.aboutPreview.diversityIntro}
                    <ul>
                      {home.aboutPreview.diversityPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
              <div className="about-cta">
                <Link to={home.aboutPreview.ctaLink} className="btn btn-primary">
                  {home.aboutPreview.ctaText}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Podcast Preview Section */}
      <section className="preview-section podcast-preview">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="preview-header">
              <h2 className="section-title">{home.podcastPreview.title}</h2>
              <Link to={home.podcastPreview.viewMoreLink} className="view-more">
                {home.podcastPreview.viewMoreText} <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </AnimatedSection>

          <div className="preview-grid">
            {podcastPreview.map((podcast, index) => (
              <AnimatedSection key={index} delay={index * 0.1 + 0.3}>
                <PodcastCard
                  thumbnail={podcast.thumbnail}
                  title={podcast.title}
                  youtubeLink={podcast.youtubeLink}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="preview-section gallery-preview">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="preview-header">
              <h2 className="section-title-new">{home.galleryPreview.title}</h2>
              <Link to={home.galleryPreview.viewMoreLink} className="view-more">
                {home.galleryPreview.viewMoreText} <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </AnimatedSection>

          <div className="preview-grid">
            {galleryPreview.map((galleryItem, index) => (
              <AnimatedSection key={index} delay={index * 0.1 + 0.3}>
                <GalleryCard
                  image={galleryItem.image}
                  title={galleryItem.title}
                  videoLink={galleryItem.videoLink}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">{home.testimonials.title}</h2>
          </AnimatedSection>

          <div className="testimonials-grid">
            {home.testimonials.items.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1 + 0.3}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{testimonial.quote}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="about-cta">
          <Link to={home.testimonials.ctaLink} className="btn btn-primary">
            {home.testimonials.ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
