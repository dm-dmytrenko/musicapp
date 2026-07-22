import React from 'react';
import { Box } from '@mui/system';
import AudioWaveform from '../components/AudioWaveform/AudioWaveform';
import * as s from './VibeSection.styles';

const VibeSection = () => (
  <Box sx={s.centeredLayoutRootStyles}>
    <Box sx={s.uppercasePillLabelStyles}>HOW IT WORKS</Box>
    <Box component="h2" sx={s.highImpactTitleStyles}>
      Give us 15 seconds. We map the vibe.
    </Box>
    <Box sx={s.coreExplanationParagraphStyles}>
      Upload a brief snippet of your track. Our app analyzes frequencies, rhythms, and tempos to generate concept art and text titles that perfectly match the soul of your sound.
    </Box>

    <AudioWaveform sx={{ marginTop: { xs: '12px', sm: '18px', md: '24px' } }} />
  </Box>
);

export default VibeSection;