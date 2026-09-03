import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PodcastCard from '../components/PodcastCard';
import podcastsData from '../data/podcasts.json';
import '../styles/main.css';

const Podcast = () => {
  const podcasts = podcastsData.podcasts;

  return (
    <div className="podcast-page">
      <section className="podcast-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Our Podcasts</h1>
            <p className="subtitle">
              Listen to inspiring conversations about creativity, education, and youth empowerment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="podcast-list">
        <div className="container">
          <div className="podcast-grid">
            {podcasts.map((podcast, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
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
    </div>
  );
};

export default Podcast;