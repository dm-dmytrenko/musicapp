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
import * as s from './AboutUs.styles';

const AboutUs = () => {
  return (
    <Box sx={s.masterScrollWrapperStyles}>

      <Box sx={s.sectionContainerStyles}>
        <HeroSection />
      </Box>
      
      <Box sx={s.sectionContainerStyles}>
        <StruggleSection />
      </Box>
      
      <Box sx={s.sectionContainerStyles}>
        <VibeSection />
      </Box>
      
      <Box sx={s.sectionContainerStyles}>
        <FeaturesSection />
      </Box>
      
      <Box sx={s.sectionContainerStyles}>
        <ManifestoSection />
      </Box>
      
      <Box sx={s.sectionContainerStyles}>
        <FuturePlansSection />
      </Box>
      
      <Box sx={s.sectionContainerStyles}>
        <EmailSection />
      </Box>

      <Box sx={s.sectionContainerStyles}>
        <Box sx={s.footerCtaStackStyles}>
          <Box component="h2" sx={s.footerCtaHeadlineStyles}>
            Stop staring at the canvas.<br />Let your sound lead.
          </Box>
          <ActionButton />
        </Box>
      </Box>

    </Box>
  );
};

export default AboutUs;