import React from 'react';
import { Box } from '@mui/system';
import { useTranslation, Trans } from 'react-i18next';
import * as s from './StruggleSection.styles';

const StruggleSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={s.sectionGlassCardStyles}>
      <Box sx={s.narrativeTextColumnStyles}>
        <Box sx={s.highContrastAlertLabelStyles}>
          {t('struggle.badge')}
        </Box>
        <Box component="h2" sx={s.coreProblemHeadingStyles}>
          {t('struggle.heading')}
        </Box>
        <Box sx={s.behavioralListWrapperStyles}>
          <Box>
            👉 <Trans i18nKey="struggle.bullet1_bold">
              <b>Finishing a track feels amazing.</b> But spending the next day stressing over album names and formatting artwork kills your creative high.
            </Trans>
          </Box>
          <Box>
            👉 <Trans i18nKey="struggle.bullet2_bold">
              <b>It drains your energy</b> right when you should be celebrating your music.
            </Trans>
          </Box>
        </Box>
      </Box>
      
      <Box sx={s.metricsHighlightBoxStyles}>
        <Box sx={s.structuralImpactEmojiStyles}>⚡</Box>
        <Box sx={s.calloutSubheadingStyles}>
          {t('struggle.highlight_heading')}
        </Box>
        <Box sx={s.solutionSummaryParagraphStyles}>
          {t('struggle.highlight_text')}
        </Box>
      </Box>
    </Box>
  );
};

export default StruggleSection;