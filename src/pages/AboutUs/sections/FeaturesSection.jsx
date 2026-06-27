import React from 'react';
import { Box } from '@mui/system';
import * as s from './FeaturesSection.styles';

const FeaturesSection = () => (
  <Box sx={s.outerGridContainerStyles}>
    
    <Box sx={s.featureCardColumnStyles}>
      <Box sx={s.cardHeaderLayoutRowStyles}>
        <Box sx={s.geometricIconBoxStyles}>🗺️</Box>
        <Box sx={s.uniqueTitleHeadingStyles}>The Genreless Problem</Box>
      </Box>
      <Box sx={s.genericBulletListContainerStyles}>
        <Box>• <b>Distributors demand strict categories</b>, but experimental music often defies classification.</Box>
        <Box>• <b>Our solution:</b> We scan your frequency weights to find official commercial tags that slide past distributor review blocks safely.</Box>
      </Box>
    </Box>

    <Box sx={s.featureCardColumnStyles}>
      <Box sx={s.cardHeaderLayoutRowStyles}>
        <Box sx={s.geometricIconBoxStyles}>🛡️</Box>
        <Box sx={s.uniqueTitleHeadingStyles}>Anti-AI Workarounds</Box>
      </Box>
      <Box sx={s.genericBulletListContainerStyles}>
        <Box>• <b>Streaming stores are cracking down</b> on raw, unedited AI art and metadata formats.</Box>
        <Box>• <b>Our solution:</b> We pass all graphics through a multi-layer styling system so your final assets look clean and fully compliant.</Box>
      </Box>
    </Box>
    
  </Box>
);

export default FeaturesSection;