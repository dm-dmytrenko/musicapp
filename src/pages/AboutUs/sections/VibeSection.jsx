import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import AudioWaveform from '../components/AudioWaveform/AudioWaveform';
import * as s from './VibeSection.styles';

const VibeSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={s.centeredLayoutRootStyles}>
      <Box sx={s.uppercasePillLabelStyles}>
        {t('vibe.badge')}
      </Box>
      <Box component="h2" sx={s.highImpactTitleStyles}>
        {t('vibe.heading')}
      </Box>
      <Box sx={s.coreExplanationParagraphStyles}>
        {t('vibe.description')}
      </Box>

      <AudioWaveform sx={{ marginTop: { xs: '12px', sm: '18px', md: '24px' } }} />
    </Box>
  );
};

export default VibeSection;