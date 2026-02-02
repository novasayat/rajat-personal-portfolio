// src/components/Footer/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialLinks from '../common/SocialLinks';

const FooterContainer = styled.footer`
  padding: 2rem 10%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--accent-color);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterLinks>
        <SocialLinks
          items={[
            {
              label: 'GitHub',
              href: 'https://github.com/novasayat',
              icon: <FaGithub />,
              external: true,
              ariaLabel: 'Rajat Rautan on GitHub'
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/rajatrautan/',
              icon: <FaLinkedin />,
              external: true,
              ariaLabel: 'Rajat Rautan on LinkedIn'
            }
          ]}
          showLabels={false}
        />
      </FooterLinks>
      <Copyright>
        (c) {currentYear} Rajat Rautan. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
