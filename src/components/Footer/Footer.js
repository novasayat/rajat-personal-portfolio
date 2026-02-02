// src/components/Footer/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 10%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  
  a {
    color: var(--secondary-color);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--accent-color);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </SocialLinks>
      <Copyright>
        (c) {currentYear} Your Name. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;