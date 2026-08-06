import React from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as s from './HeroSection.styles';

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={s.centeredLayoutRootStyles}>
      <Box sx={s.floatingPillBadgeStyles}>
        {t('hero.badge')}
      </Box>
      <Box component="h1" sx={s.masterPageHeadlineStyles}>
        <Trans i18nKey="hero.headline">
          Give your music to the world.<br />Without the overhead.
        </Trans>
      </Box>
      <Box sx={s.productSubtextDescriptionStyles}>
        {t('hero.subtext')}
      </Box>
      <Box sx={s.ctaButtonWrapperStyles}>
        <ActionButton
          onClick={() => navigate('/upload')}
          caption={t('hero.cta_caption')}
          sx={{
            fontSize: { xs: '16px', sm: '18px' },
            fontWeight: 800,
            padding: { xs: '14px 32px', sm: '16px 48px' }
          }}
        >
          {t('hero.cta_button')}
        </ActionButton>
      </Box>
    </Box>
  );
};

export default HeroSection;