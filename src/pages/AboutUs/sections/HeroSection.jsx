import React from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as s from './HeroSection.styles';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
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
        <ActionButton
          onClick={() => navigate('/upload')}
          caption="It is free. Forever."
          sx={{
            fontSize: { xs: '16px', sm: '18px' },
            fontWeight: 800,
            padding: { xs: '14px 32px', sm: '16px 48px' }
          }}
        >
          Try it Free
        </ActionButton>
      </Box>
    </Box>
  );
};

export default HeroSection;