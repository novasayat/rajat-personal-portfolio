// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { smoothScroll } from '../../utils/smoothScroll';

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  mix-blend-mode: difference;
`;

const Logo = styled(motion.div)`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--secondary-color);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(motion.a)`
  color: var(--secondary-color);
  font-size: 1rem;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Added handleClick function
  const handleClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(targetId);
  };

  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo>Rajat Rautan</Logo>
      <Nav>
        <NavItem 
          href="#about"
          whileHover={{ scale: 1.1 }}
          onClick={(e) => handleClick(e, 'about')}
        >
          About
        </NavItem>
        <NavItem 
          href="#projects"
          whileHover={{ scale: 1.1 }}
          onClick={(e) => handleClick(e, 'projects')}
        >
          Projects
        </NavItem>
        <NavItem 
          href="#contact"
          whileHover={{ scale: 1.1 }}
          onClick={(e) => handleClick(e, 'contact')}
        >
          Contact
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
