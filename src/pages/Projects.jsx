import React from 'react';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/main.css';

const Projects = () => {
  const projects = [
    {
      title: "A Journey Towards Sustainability",
      image: "../upload/images/projects/post4.png",
      tags: [" Budapest, Hungary", " Feb 2025"],
      link: "https://www.instagram.com/p/DHOrFPyTZo5/?igsh=Nzc3cXlmNmdlaWtp"
    },
    {
      title: "Youth Voices for European Citizenship",
      image: "../upload/images/projects/post2.png",
      tags: ["Budapest, Hungary", " Feb 2025"],
      link: "https://www.instagram.com/p/DGBzRLlu2ME/?igsh=MXg5b3RvaTc2bHFudQ%3D%3D"
    },
    {
      title: "Harmony Of Nature",
      image: "../upload/images/projects/post5.png",
      tags: ["Budapest, Hungary", " Jan 2025"],
      link: "https://www.instagram.com/p/DHQaca8RsFb/?igsh=ODhuYnN3aHh4cGt3&img_index=3"
    },
    {
      title: "Sustainable farming & Digital agriculture",
      image: "../upload/images/projects/post3.png",
      tags: ["Budapest, Hungary", " Jan 2025"],
      link: "https://www.instagram.com/p/DHSl726xGbX/?igsh=MWRiYmJlbHRncnAydg=="
    },
    {
      title: "Digital Entrepreneurship Bootcamp",
      image: "../upload/images/projects/post8.png",
      tags: ["Online", " Nov 2024"],
      link: "https://www.instagram.com/p/DCMg0aRTtDG/?igsh=MXhyN2Jtc2w5dG12dw%3D%3D"
    },
    {
      title: "EYZEN: Integrating AI into Education",
      image: "../upload/images/projects/post9.png",
      tags: ["Turkey", " Oct 2024"],
      link: "https://www.instagram.com/p/DBrO7Z7sZEs/?igsh=MWxtZjUzdzhwaGdzdw%3D%3D"
    },
    {
      title: "Empowering Disadvantaged Students through Design Thinking",
      image: "../upload/images/projects/post6.png",
      tags: ["Budapest, Hungary", " Sept 2026"],
      link: "https://www.instagram.com/p/DHTu6fkTWl7/?igsh=OXh3ZzZibmI2b2Nn&img_index=10"
    },
    {
      title: "Eco Literate Project 2024",
      image: "../upload/images/projects/post7.png",
      tags: ["Budapest, Hungary", " Aug 2024"],
      link: "https://www.instagram.com/p/DHTK5MqTLP-/?igsh=MXN4amVmd2NpYzQ4bw%3D%3D&img_index=10"
    },
    {
      title: "Speak up, Make a Difference, Stop the Bullying",
      image: "../upload/images/projects/post1.png",
      tags: ["Mezőkövesd, Hungary", "  Aug 2024"],
      link: "https://www.instagram.com/reel/DDeLFzpSftt/?igsh=MWk4M3dxcjY3a2syeg%3D%3D"
    },
    {
      title: "Speak Up - Take Action",
      image: "../upload/images/projects/post10.png",
      tags: ["Portoroz, Slovenia", " 3 - 12 June 2023"],
      link: "https://i-vin.info/news/golos-molodi--reaguyuchi-na-viklik-migraciyi-%E2%80%93-dosvid-ukrayinskih-uchasnic-u-proyekti-speak-up-%E2%80%93-take-action-(foo)--5868.html"
    },
    {
      title: "C.O.L.O.R doesn't matter",
      image: "../upload/images/projects/post11.png",
      tags: ["Rendeux, Belgium", " 28 August - 06 September 2023"],
      link: "https://www.instagram.com/p/CzTsVgtoXPo/"
    },
    {
      title: "PROTECT WILDLIFE AGAINST FIRES",
      image: "../upload/images/projects/post12.png",
      tags: ["Braga, Portugal", " 2 - 11 January 2024"],
      link: "https://www.instagram.com/p/CzY6fOKtaKL/"
    },
    {
      title: "Youth's Water of Future' Water",
      image: "../upload/images/projects/post13.png",
      tags: ["İstanbul, Türkiye", " 1 - 9 September 2021"],
      link: "https://creativeyouthacademy.wordpress.com/youth-water-of-futures-water/"
    },
    {
      title: "codE+tech",
      image: "../upload/images/projects/post14.png",
      tags: ["İstanbul, Türkiye", " 18 - 27 May 2022"],
      link: "https://creativeyouthacademy.wordpress.com/codetech/"
    },
    {
      title: "Beyond Borders, Enhance Dialogue",
      image: "../upload/images/projects/post15.png",
      tags: ["Bucharest, Romania", " 1  - 10 August 2022"],
      link: "https://cya.my.canva.site/bbed"
    }, 
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Our Projects</h1>
            <p className="subtitle">
              Explore the innovative work created by our students and mentors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="projects-list">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;