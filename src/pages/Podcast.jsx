import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PodcastCard from '../components/PodcastCard';
import '../styles/main.css';

const Podcast = () => {
 
    const podcasts = [
    {
      thumbnail: "/upload/images/podcast/podcast1.png",
      title: "The Eco-Friendly Awareness PODCAST 1",
      youtubeLink: "https://www.youtube.com/watch?v=YwzSZ3YaoW8&list=PLiWVTgiG0CGcH0YuE_16imAZkJTup_xwh&index=2"
    },
    {
      thumbnail: "/upload/images/podcast/podcast1.png",
      title: "The Eco-Friendly Awareness PODCAST 2",
      youtubeLink: "https://www.youtube.com/watch?v=1Kn64HojdqM&t=1s"
    },
    {
      thumbnail: "/upload/images/podcast/podcast1.png",
      title: "The Eco-Friendly Awareness PODCAST 3",
      youtubeLink: "https://www.youtube.com/watch?v=WBTe6YWM0c0&t=3s"
    },
    {
      thumbnail: "/upload/images/podcast/podcast2.png",
      title: "HARMONY OF NATURE",
      youtubeLink: "https://www.youtube.com/watch?v=TQ_udJSlsvc&list=PLiWVTgiG0CGcncD-145Nteu2eAQtSxujz&index=1"
    },
  ];

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