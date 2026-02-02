// src/components/About/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile.png';

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
          <img src={profileImage} alt="Rajat Rautan" />
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
            I am a data and BI analyst with 4+ years of experience building end-to-end analytics solutions, from stakeholder discovery and data modeling to dashboard delivery and data quality automation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I focus on translating complex business needs into scalable, self-service reporting and actionable insights using tools like Power BI, Tableau, Qlik Sense, SQL, and Python.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Skills: SQL, Python, R, Power BI, Tableau, Qlik Sense, dbt, PySpark, MS Fabric, Snowflake, BigQuery, and Azure/AWS fundamentals.
          </motion.p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
