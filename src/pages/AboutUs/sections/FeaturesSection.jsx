import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import * as s from './FeaturesSection.styles';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const featureCards = [
    {
      icon: '🗺️',
      titleKey: 'features.card1.title',
      bullets: [
        {
          boldKey: 'features.card1.bullet1_bold',
          textKey: 'features.card1.bullet1_text',
        },
        {
          boldKey: 'features.card1.bullet2_bold',
          textKey: 'features.card1.bullet2_text',
        },
      ],
    },
    {
      icon: '🛡️',
      titleKey: 'features.card2.title',
      bullets: [
        {
          boldKey: 'features.card2.bullet1_bold',
          textKey: 'features.card2.bullet1_text',
        },
        {
          boldKey: 'features.card2.bullet2_bold',
          textKey: 'features.card2.bullet2_text',
        },
      ],
    },
  ];

  return (
    <Box sx={s.outerGridContainerStyles}>
      {featureCards.map(({ icon, titleKey, bullets }, index) => (
        <Box key={index} sx={s.featureCardColumnStyles}>
          <Box sx={s.cardHeaderLayoutRowStyles}>
            <Box sx={s.geometricIconBoxStyles}>{icon}</Box>
            <Box component="h3" sx={s.uniqueTitleHeadingStyles}>
              {t(titleKey)}
            </Box>
          </Box>
          <Box sx={s.genericBulletListContainerStyles}>
            {bullets.map((bullet, bulletIdx) => (
              <Box key={bulletIdx}>
                • <b>{t(bullet.boldKey)}</b>
                {t(bullet.textKey)}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FeaturesSection;