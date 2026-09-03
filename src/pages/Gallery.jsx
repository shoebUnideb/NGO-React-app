import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import GalleryCard from '../components/GalleryCard';
import galleryData from '../data/gallery.json';
import '../styles/main.css';

const Gallery = () => {
  const galleryItems = galleryData.gallery;

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Our Gallery</h1>
            <p className="subtitle">
              Explore moments from our creative journey and student achievements
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GalleryCard 
                  image={item.image}
                  title={item.title}
                  videoLink={item.videoLink}
                  floating={item.floating}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;