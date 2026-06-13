import React from 'react';
import { Box } from '@mui/system';

const AboutUs = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif"
    }}>
      <Box sx={{
        fontSize: '3vw',
        minFontSize: '24px',
        fontWeight: 800,
        color: '#0044cc',
        textAlign: 'center',
        letterSpacing: '-0.5px'
      }}>
        To be done later...
      </Box>
    </Box>
  );
};

export default AboutUs;