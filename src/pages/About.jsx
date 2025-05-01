import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/main.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Who are we ?</h1>
            <p className="subtitle">
              Learn about our mission, vision, and the team behind Creative Youth Academy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <AnimatedSection delay={0.2}>
              <h3>Our Mission</h3>
              <p>
              Creative Youth Academy Hungary (CYA Hungary) is a dynamic youth organization founded based in Budapest, Hungary. Our mission is to empower young individuals, particularly those from disadvantaged backgrounds, by providing opportunities for personal growth, creative expression, and skill development. <br/>
              We are passionate about fostering inclusion and diversity, ensuring that youth with fewer opportunities—including individuals from low-income families, rural areas, refugee backgrounds, and those with disabilities—are supported and uplifted.
                    
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <h3>Our Vision</h3>
              <p>
              We envision a society where every young person, regardless of their background, is inspired, empowered, and equipped to achieve their full potential while contributing meaningfully to their communities.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <h3>Our Impact</h3>
                <p>Since our establishment, Creative Youth Academy Hungary has reached over 1,000 individuals, including:
                    <ul>
                    	<li> and young adults interested in personal growth and creative expression.</li>
                    	<li>Students seeking skill development and hands-on learning opportunities.</li>
                    	<li>Youth workers and educators looking to enhance their methodologies and teaching practices.</li>
                    	<li>Teachers and trainers participating in capacity-building initiatives to better support youth with fewer opportunities.</li>
                        <li> Our activities have directly impacted communities in Hungary and abroad, fostering cultural exchange, breaking down stereotypes, and building networks of mutual support and collaboration.</li>
                </ul></p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <h3>Achievements and Recognition</h3>
                <p>
                    To date, we have:
                    <ul>
                        <li>Partnered on enormous Erasmus+ projects across Europe, covering topics like digital skills, environmental sustainability, and social inclusion.</li>
                        <li>Designed and delivered workshops and training for youth workers, enabling them to adopt innovative methods in their roles.</li>
                        <li>Engaged participants from over 40 countries, fostering intercultural collaboration and learning.</li>
                        <li>Developed and implemented impactful community projects in Hungary, positively transforming local communities.</li>
                                      
                    </ul></p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <h3>Diversity and Team Strength</h3>
                <p> Our team includes 20 core members and numerous volunteers aged 16-51. This diverse composition enhances our ability to:
                    <ul>
                        <li>Promote inclusion and representation in all our projects.</li>
                        <li>Develop innovative and empathetic programs that resonate with a wide range of participants.</li>
                    </ul>
                </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <p>Key highlights of our diverse team:
                <ul>
                        <li>Professionals in project management, media, arts, and education.</li>
                        <li>Dedicated volunteers contributing expertise in communications, social media, and event planning.</li>
                        <li>Active youth workers who bring grassroots-level insights into challenges faced by disadvantaged youth.</li>
                </ul>
                </p>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">Meet Our Partners</h2>
          </AnimatedSection>
          
          <div className="team-grid">
            <AnimatedSection delay={0.3}>
              <div className="team-member">
                <div className="member-image">
                  <img src="/upload/images/about/partner1.png" alt="COPERNICUS BERLIN" />
                </div>
                <h3>COPERNICUS BERLIN</h3>
                <p className="bio">
                Born in the vibrant heart of Berlin in the year 2000, we are more than just an association - we're a global network.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="team-member">
                <div className="member-image">
                  <img src="/upload/images/about/partner2.png" alt="Team Member" />
                </div>
                <h3>IMEPO</h3>
                
                <p className="bio">
                HELLENIC MIGRATION POLICY INSTITUTE
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="team-member">
                <div className="member-image">
                  <img src="/upload/images/about/partner3.png" alt="BRATISLAVA POLICY INSTITUTE" />
                </div>
                <h3>Sarah Johnson</h3>
                <p className="position">BRATISLAVA POLICY INSTITUTE</p>
                <p className="bio">
                  Professional artist dedicated to nurturing creative expression in young people.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="sect">Technology Team</h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
              <div className="member">
                <div className="member-image">
                  <img src="/upload/images/about/me-.png" alt="me" />
                </div>
                <h3>Mohammad Shoeb</h3>
                <div className="hero-buttons">
                  <a href="https://www.linkedin.com/in/mohdshoeb2021/" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Linkedin
                                </a>
                </div>
              </div>
            </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;