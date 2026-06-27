import React from 'react';
import { Box } from '@mui/system';
import ActionButton from '../components/ActionButton';
import * as s from './HeroSection.styles';

const HeroSection = () => (
  <Box sx={s.centeredLayoutRootStyles}>
    <Box sx={s.floatingPillBadgeStyles}>
      INTRODUCING TroisD
    </Box>
    <Box component="h1" sx={s.masterPageHeadlineStyles}>
      Give your music to the world.<br />Without the overhead.
    </Box>
    <Box sx={s.productSubtextDescriptionStyles}>
      We are an independent team building straightforward, automated release tools for bedroom producers and indie artists.
    </Box>
    <Box sx={s.ctaButtonWrapperStyles}>
      <ActionButton />
    </Box>
  </Box>
);

export default HeroSection;