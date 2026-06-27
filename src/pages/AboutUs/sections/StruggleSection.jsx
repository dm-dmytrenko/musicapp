import React from 'react';
import { Box } from '@mui/system';
import * as s from './StruggleSection.styles';

const StruggleSection = () => (
  <Box sx={s.sectionGlassCardStyles}>
    <Box sx={s.narrativeTextColumnStyles}>
      <Box sx={s.highContrastAlertLabelStyles}>THE 24-HOUR STRUGGLE</Box>
      <Box sx={s.coreProblemHeadingStyles}>
        Staring at a blank screen kills your momentum.
      </Box>
      <Box sx={s.behavioralListWrapperStyles}>
        <Box>👉 <b>Finishing a track feels amazing.</b> But spending the next day stressing over album names and formatting artwork kills your creative high.</Box>
        <Box>👉 <b>It drains your energy</b> right when you should be celebrating your music.</Box>
      </Box>
    </Box>
    
    <Box sx={s.metricsHighlightBoxStyles}>
      <Box sx={s.structuralImpactEmojiStyles}>⚡</Box>
      <Box sx={s.calloutSubheadingStyles}>From 24 Hours to 5 Minutes</Box>
      <Box sx={s.solutionSummaryParagraphStyles}>
        We instantly compress your entire post-production checklist into a distribution-ready asset package.
      </Box>
    </Box>
  </Box>
);

export default StruggleSection;