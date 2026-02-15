// src/components/Projects/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 10%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 4px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover .project-info {
    background: #f3f3f3;
    color: #111;
  }

  &:hover .project-info p,
  &:hover .project-info span {
    color: #2f2f2f;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #111 0%, #333 100%);
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  opacity: 1;
  transition: background 0.25s ease, color 0.25s ease;
  color: var(--secondary-color);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    color: var(--accent-color);
    font-size: 0.95rem;
  }
`;

const ProjectLinkButton = styled.a`
  width: fit-content;
  padding: 0.55rem 1rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Real-Time Financial Fraud Detection',
      description: 'Built a real-time fraud analytics pipeline in PySpark to process 6.3M transactions, surface risk patterns, and deliver near real-time monitoring through structured streaming, feature engineering, and multi-model ML evaluation.',
      image: null,
      link: 'https://github.com/novasayat/real-time-fraud-pyspark'
    },
    {
      id: 2,
      title: 'Crime Analysis & Prediction (Washington, DC)',
      description: 'Combined public datasets to model crime patterns and predict offense rates using regression and random forest.',
      image: null,
      link: null
    }
  ];
  
  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {project.image ? (
              <ProjectImage src={project.image} alt={project.title} />
            ) : (
              <ProjectImagePlaceholder />
            )}
            <ProjectInfo className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link ? (
                <ProjectLinkButton
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Project
                </ProjectLinkButton>
              ) : (
                <span>Details available on request</span>
              )}
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
