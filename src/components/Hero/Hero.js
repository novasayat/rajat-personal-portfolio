// src/components/Hero/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: var(--accent-color);
  max-width: 600px;
`;

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  const title = "Data Analyst & BI Analyst";
  
  return (
    <HeroContainer id="home">
      <Title
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {title.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Impact-focused data and BI analyst with 4+ years of experience delivering revenue growth and operational efficiency through scalable analytics, dashboards, and data quality pipelines.
      </Subtitle>
    </HeroContainer>
  );
};

export default Hero;
