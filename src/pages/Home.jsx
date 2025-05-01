import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PodcastCard from '../components/PodcastCard';
import GalleryCard from '../components/GalleryCard';
import '../styles/main.css';

const Home = () => {
  // Podcast preview data (first 3 podcasts)
  const podcastPreview = [
    {
      thumbnail: "/upload/images/podcast/podcast1.png",
      title: "Creative Thinking for Young Minds",
      youtubeLink: "https://youtube.com"
    },
    {
      thumbnail: "/upload/images//podcast/podcast2.png",
      title: "Art and Technology Fusion",
      youtubeLink: "https://youtube.com"
    },
    {
      thumbnail: "/upload/images/podcast/podcast1.png",
      title: "Future of Digital Education",
      youtubeLink: "https://youtube.com"
    }
  ];

  // Gallery preview data (first 3 gallery items)
  const galleryPreview = [
    {
      image: "/upload/images/projects/post10.jpg",
      videoLink: "https://youtu.be/WvKSwkg-u1g",
      floating: true
    },
    {
      image: "/upload/images/gallery/2.jpg",
      
      floating: true
    },
    {
      image: "/upload/images/gallery/3.png",
      floating: true
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section with GIF Background */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="/upload/images/home/hero-animation.gif" 
            alt="Animated background" 
            className="hero-gif"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <AnimatedSection>
            <div className="hero-content">
              <h1 className="hero-title">
                Empowering Young Minds Through Creative Education
              </h1>
              <p className="hero-subtitle">
                Join our academy to unlock your creative potential and develop skills for the future.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">Our Projects</Link>
                <Link to="/contact" className="btn">Subscribe to Newsletter</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <h2 className="section-title-new">We Focus on</h2>
          </AnimatedSection>
          
          <div className="features-grid">
            <AnimatedSection delay={0.3}>
              <div className="feature-card">
                <div className="feature-icon pulse">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Climate Change & Green Solutions</h3>
                
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="feature-card">
                <div className="feature-icon rotate">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Democratic Participation, International Dialogue & Inclusion</h3>
                
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="feature-card">
                <div className="feature-icon bounce">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3>Digitalization, Software & Tech</h3>
                
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <AnimatedSection delay={0.2}>
              <h2 className="section-title">❝ About Our Academy</h2>
              <div className="about-highlights">
                <div className="highlight-item">
                  <h3>Our Mission</h3>
                  <p>
                  Creative Youth Academy Hungary (CYA Hungary) is a dynamic youth organization founded based in Budapest,
                   Hungary. Our mission is to empower young individuals, particularly those from disadvantaged backgrounds,
                    by providing opportunities for personal growth, creative expression, and skill development.
                  </p>
                </div>
                <div className="highlight-item">
                  <h3>Our Vision</h3>
                  <p>
                  We envision a society where every young person, regardless of their background, is inspired, 
                  empowered, and equipped to achieve their full potential while contributing meaningfully to their communities.
                  </p>
                </div>
                <div className="highlight-item">
                  <h3>Diversity and Team Strength</h3>
                  <p> Our team includes 20 core members and numerous volunteers aged 16-51. This diverse composition enhances our ability to:
                  <ul>
                     <li>Promote inclusion and representation in all our projects.</li>
                     <li>Develop innovative and empathetic programs that resonate with a wide range of participants.</li>
                    
                  </ul>
                  </p>
                </div>
              </div>
              <div className="about-cta">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
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
              <h2 className="section-title">Latest Podcasts</h2>
              <Link to="/podcast" className="view-more">
                View More <i className="fas fa-arrow-right"></i>
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
              <h2 className="section-title-new">Gallery Highlights</h2>
              <Link to="/gallery" className="view-more">
                View More <i className="fas fa-arrow-right"></i>
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
            <h2 className="section-title">❝ What Our Ambassadors Say</h2>
          </AnimatedSection>
          
          <div className="testimonials-grid">
            <AnimatedSection delay={0.3}>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"It was eye-opening to meet so many different cultures and it was really interesting to learn more about the environmental problems on earth and to talk about the current issues in the world."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-info">
                    <h4>Zsofia Berzeviczy Elek</h4>
                    
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"I'm very excited to share my recent experience with CYA in the Erasmus+ project on human rights! Joining this project, I already had background knowledge on social issues and human rights, but I didn't expect that this exchange would be so enriching!! Not only did I expand my knowledge by practice and doing, but also learnt new methodologies!"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-info">
                    <h4>Tetiana Shevchenko</h4>
                    
                  </div>
                </div>
              </div>
            </AnimatedSection>  
          </div>
        </div>
        <div className="about-cta">
                <Link to="/Ambassadors" className="btn btn-primary">
                  View Our Ambassadors
                </Link>
              </div>
      </section>
    </div>
  );
};

export default Home;