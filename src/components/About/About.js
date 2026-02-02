// src/components/About/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 10%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(135deg, #111 0%, #333 100%);
  overflow: hidden;
  display: grid;
  place-items: center;
  color: var(--accent-color);
  font-size: 0.95rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutImage
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Profile image coming soon</span>
        </AboutImage>
        <AboutText>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate designer and developer with a focus on creating intuitive, functional, and beautiful digital experiences. With expertise in UI/UX design and front-end development, I bridge the gap between design and implementation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My approach combines clean aesthetics with user-centered design principles to create websites and applications that not only look fantastic but also function seamlessly.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
          </motion.p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
