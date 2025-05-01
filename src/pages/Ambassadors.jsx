import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import AmbassadorCard from '../components/AmbassadorCard';
import '../styles/main.css';

const Ambassadors = () => {
      // ... (keep your existing ambassadors array)
    const ambassadors = [
        {
          image: "../upload/images/ambassadors/1.png",
          name: "Norbi",
          socialLinks: {
            instagram: "https://www.instagram.com/p/CzAD4QVtxtl/"
          }
        },
        {
          image: "../upload/images/ambassadors/2.png",
          name: "Aigerim",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C4qb7epS-Y3/"
          }
        },
        {
          image: "../upload/images/ambassadors/3.png",
          name: "Attila Pulai",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C0Z8LK-NQnf/"
          }
        },
        {
          image: "../upload/images/ambassadors/4.png",
          name: "Zsofia Berzeviczy Elek",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C8l-KzgStdP/?igsh=MnVuMGwydHg1d2Vq"
          }
        },
        {
          image: "../upload/images/ambassadors/5.png",
          name: "Mohammad Shoeb",
          socialLinks: {
            instagram: "https://www.instagram.com/p/DBUPbbfTL45/"
          }
        },
        {
          image: "../upload/images/ambassadors/6.png",
          name: "Kamila Farkas",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C5kmLokS-32/"
          }
        },
        {
          image: "../upload/images/ambassadors/7.png",
          name: "Aaryan Sharma",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C0Z8cDrNgo0/"
          }
        },
        {
          image: "../upload/images/ambassadors/8.png",
          name: "Yahya Khaled",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C5gtr8QSZql/"
          }
        },
        {
          image: "../upload/images/ambassadors/9.png",
          name: "Tetiana Shevchenko",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C5i0csqyRfy/"
          }
        },
        {
          image: "../upload/images/ambassadors/10.png",
          name: "Tuvshin Demchig",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C0Z7GA7NHHX/?igsh=MWg2bTJ6Y3ZmdTByZA%3D%3D"
          }
        },
        {
          image: "../upload/images/ambassadors/11.png",
          name: "Fanni",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C1Km5YVNScd/"
          }
        },
        {
          image: "../upload/images/ambassadors/12.png",
          name: "Amina Aligulova",
          socialLinks: {
            instagram: "https://www.instagram.com/p/DBUMjWwTMTo/"
          }
        },
        {
          image: "../upload/images/ambassadors/13.png",
          name: "Aswin",
          socialLinks: {
            instagram: "https://www.instagram.com/p/Cr1paHDtmUs/?igsh=YTAybHRkdzh5cGo2"
          }
        },
        {
          image: "../upload/images/ambassadors/14.png",
          name: "Janka Trencsanszky",
          socialLinks: {
            instagram: "https://www.instagram.com/p/C5dCzbtSDHM/"
          }
        },
        {
          image: "../upload/images/ambassadors/15.png",
          name: "Robert",
          socialLinks: {
            instagram: "https://www.instagram.com/p/CzADV8rNBbH/"
          }
        },
        
  ];

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