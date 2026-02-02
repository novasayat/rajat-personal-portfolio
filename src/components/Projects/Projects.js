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
  
  &:hover .project-info {
    opacity: 1;
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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
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
    color: var(--secondary-color);
    text-decoration: underline;
  }

  span {
    color: var(--accent-color);
    font-size: 0.95rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with product filtering and search capabilities.',
      image: '/path-to-image.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website for a photographer showcasing their work.',
      image: '/path-to-image.jpg',
      link: '#'
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
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              ) : (
                <span>View Project</span>
              )}
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
