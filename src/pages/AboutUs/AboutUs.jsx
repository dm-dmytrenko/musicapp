import React from 'react';
import { Box } from '@mui/system';

import HeroSection from './sections/HeroSection';
import StruggleSection from './sections/StruggleSection';
import VibeSection from './sections/VibeSection';
import FeaturesSection from './sections/FeaturesSection';
import ManifestoSection from './sections/ManifestoSection';
import FuturePlansSection from './sections/FuturePlansSection';
import EmailSection from './sections/EmailSection';
import ActionButton from './components/ActionButton';

const AboutUs = () => {
  const sectionContainerStyles = {
    width: '100%',
    minHeight: '100vh',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    scrollSnapAlign: 'start',
    boxSizing: 'border-box',
    padding: '40px 5%'
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth',
      boxSizing: 'border-box',
      background: 'transparent',
      fontFamily: "'Inter', sans-serif",
      '&::-webkit-scrollbar': { width: '0px' },
    }}>

      <Box sx={sectionContainerStyles}>
        <HeroSection />
      </Box>
      
      <Box sx={sectionContainerStyles}>
        <StruggleSection />
      </Box>
      
      <Box sx={sectionContainerStyles}>
        <VibeSection />
      </Box>
      
      <Box sx={sectionContainerStyles}>
        <FeaturesSection />
      </Box>
      
      <Box sx={sectionContainerStyles}>
        <ManifestoSection />
      </Box>
      
      <Box sx={sectionContainerStyles}>
        <FuturePlansSection />
      </Box>
      
      <Box sx={sectionContainerStyles}>
        <EmailSection />
      </Box>

      <Box sx={sectionContainerStyles}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
          <Box component="h2" sx={{ fontSize: '52px', fontWeight: 900, color: '#0044cc', letterSpacing: '-2px', lineHeight: 1.1, maxWidth: '800px' }}>
            Stop staring at the canvas.<br />Let your sound lead.
          </Box>
          <ActionButton />
        </Box>
      </Box>

    </Box>
  );
};

export default AboutUs;