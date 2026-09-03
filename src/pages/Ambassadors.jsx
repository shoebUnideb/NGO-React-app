import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import AmbassadorCard from '../components/AmbassadorCard';
import ambassadorsData from '../data/ambassadors.json';
import '../styles/main.css';

const Ambassadors = () => {
  const ambassadors = ambassadorsData.ambassadors.map((a) => ({
    image: a.image,
    name: a.name,
    socialLinks: { instagram: a.instagram }
  }));

  return (
    <div className="ambassadors-page">
      <section className="ambassadors-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Our Ambassadors</h1>
            <p className="subtitle">
              Meet the inspiring individuals who represent Creative Youth Academy worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="ambassadors-list">
        <div className="container">
          <div className="ambassadors-grid">
            {ambassadors.map((ambassador, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <AmbassadorCard 
                  image={ambassador.image}
                  name={ambassador.name}
                  socialLinks={ambassador.socialLinks}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ambassadors;