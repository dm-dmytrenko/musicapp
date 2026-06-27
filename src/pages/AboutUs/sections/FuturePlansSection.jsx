import React from 'react';
import { Box } from '@mui/system';
import * as s from './FuturePlansSection.styles';

const FuturePlansSection = () => (
  <Box sx={s.centralLayoutColumnStyles}>
    <Box sx={s.alignmentHeaderStackStyles}>
      <Box sx={s.smallCategoryLabelStyles}>ROADMAP</Box>
      <Box sx={s.genericTitleHeaderStyles}>
        What we are building next
      </Box>
    </Box>

    <Box sx={s.timelineCardContainerStyles}>
      <Box sx={s.standaloneIconAvatarStyles}>📈</Box>
      <Box sx={s.projectMetaStackStyles}>
        <Box sx={s.technicalSubheadingStyles}>Vibe-Driven Smart Promotion Engine</Box>
        <Box sx={s.technicalParagraphTextStyles}>
          We are developing a tool to automatically scan your track's specific sound waves and match it to curated music niches, custom target playlists, and aesthetic visual content styles to make promotion easier.
        </Box>
      </Box>
    </Box>
  </Box>
);

export default FuturePlansSection;