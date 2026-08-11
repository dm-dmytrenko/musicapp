import React from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

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
  const { t } = useTranslation();

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
            <Trans i18nKey="aboutUs.footer_headline">
              Stop staring at the canvas.<br />Let your sound lead.
            </Trans>
          </Box>
          <ActionButton
            onClick={() => navigate('/upload')}
            caption={t('aboutUs.cta_caption')}
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              fontWeight: 800,
              padding: { xs: '14px 32px', sm: '16px 48px' },
              width: { xs: '100%', sm: 'auto' },
              maxWidth: '360px'
            }}
          >
            {t('aboutUs.cta_button')}
          </ActionButton>
        </Box>
      </AboutUsSectionWrapper>
    </Box>
  );
};

export default AboutUs;