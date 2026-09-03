import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import about from '../data/about.json';
import '../styles/main.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">{about.hero.title}</h1>
            <p className="subtitle">
              {about.hero.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <AnimatedSection delay={0.2}>
              <h3>{about.mission.title}</h3>
              <p>{about.mission.text}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3>{about.vision.title}</h3>
              <p>{about.vision.text}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3>{about.impact.title}</h3>
              <p>
                {about.impact.intro}
                <ul>
                  {about.impact.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3>{about.achievements.title}</h3>
              <p>
                {about.achievements.intro}
                <ul>
                  {about.achievements.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3>{about.diversity.title}</h3>
              <p>
                {about.diversity.intro}
                <ul>
                  {about.diversity.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p>
                {about.highlights.intro}
                <ul>
                  {about.highlights.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">{about.partnersTitle}</h2>
          </AnimatedSection>

          <div className="team-grid">
            {about.partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 0.1 + 0.3}>
                <div className="team-member">
                  <div className="member-image">
                    <img src={partner.image} alt={partner.name} />
                  </div>
                  <h3>{partner.name}</h3>
                  {partner.position && <p className="position">{partner.position}</p>}
                  <p className="bio">
                    {partner.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="sect">{about.techTeamTitle}</h2>
          </AnimatedSection>

          {about.techTeam.map((member, index) => (
            <AnimatedSection key={index} delay={0.3}>
              <div className="member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <div className="hero-buttons">
                  <a href={member.linkUrl} target="_blank" rel="noreferrer" className="btn btn-primary">{member.linkText}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
