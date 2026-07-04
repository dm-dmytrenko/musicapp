import React from 'react';
import { Box } from '@mui/system';
import * as s from './FeaturesSection.styles';

const FEATURE_CARDS = [
  {
    icon: '🗺️',
    title: 'The Genreless Problem',
    bullets: [
      <>• <b>Distributors demand strict categories</b>, but experimental music often defies classification.</>,
      <>• <b>Our solution:</b> We scan your frequency weights to find official commercial tags that slide past distributor review blocks safely.</>,
    ],
  },
  {
    icon: '🛡️',
    title: 'Anti-AI Workarounds',
    bullets: [
      <>• <b>Streaming stores are cracking down</b> on raw, unedited AI art and metadata formats.</>,
      <>• <b>Our solution:</b> We pass all graphics through a multi-layer styling system so your final assets look clean and fully compliant.</>,
    ],
  },
];

const FeaturesSection = () => (
  <Box sx={s.outerGridContainerStyles}>
    {FEATURE_CARDS.map(({ icon, title, bullets }) => (
      <Box key={title} sx={s.featureCardColumnStyles}>
        <Box sx={s.cardHeaderLayoutRowStyles}>
          <Box sx={s.geometricIconBoxStyles}>{icon}</Box>
          <Box sx={s.uniqueTitleHeadingStyles}>{title}</Box>
        </Box>
        <Box sx={s.genericBulletListContainerStyles}>
          {bullets.map((bullet, index) => (
            <Box key={index}>{bullet}</Box>
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);

export default FeaturesSection;
