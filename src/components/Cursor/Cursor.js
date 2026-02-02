// src/components/Cursor/Cursor.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
`;

const Cursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorRef.current.style.transform = `translate(${clientX - 10}px, ${clientY - 10}px)`;
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  
  return <CursorContainer ref={cursorRef} />;
};

export default Cursor;