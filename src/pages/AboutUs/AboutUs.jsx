import React from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import AboutUsSectionWrapper from './components/AboutUsSectionWrapper';
import ActionButton from '../../components/ActionButton/ActionButton';
import HeroSection from './sections/HeroSection';
import StruggleSection from './sections/StruggleSection';
import VibeSection from './sections/VibeSection';
import FeaturesSection from './sections/FeaturesSection';
import ManifestoSection from './sections/ManifestoSection';
import FuturePlansSection from './sections/FuturePlansSection';
import EmailSection from './sections/EmailSection';
import * as s from './AboutUs.styles';

const ABOUT_US_SECTIONS = [
  HeroSection,
  StruggleSection,
  VibeSection,
  FeaturesSection,
  ManifestoSection,
  FuturePlansSection,
  EmailSection,
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box sx={s.masterScrollWrapperStyles}>
      {ABOUT_US_SECTIONS.map((Section, index) => (
        <AboutUsSectionWrapper key={index}>
          <Section />
        </AboutUsSectionWrapper>
      ))}

      <AboutUsSectionWrapper>
        <Box sx={s.footerCtaStackStyles}>
          <Box component="h2" sx={s.footerCtaHeadlineStyles}>
            Stop staring at the canvas.<br />Let your sound lead.
          </Box>
          <ActionButton
            onClick={() => navigate('/upload')}
            caption="It is free. Forever."
            sx={{ fontSize: '18px', fontWeight: 800 }}
          >
            Try it Free
          </ActionButton>
        </Box>
      </AboutUsSectionWrapper>
    </Box>
  );
};

export default AboutUs;
