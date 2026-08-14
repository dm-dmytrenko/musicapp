import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import * as s from './FuturePlansSection.styles';

const FuturePlansSection = () => {
  const { t } = useTranslation();

  const plans = t('futurePlans.items', { returnObjects: true }) || [];

  return (
    <Box sx={s.centralLayoutColumnStyles}>
      <Box sx={s.alignmentHeaderStackStyles}>
        <Box sx={s.smallCategoryLabelStyles}>
          {t('futurePlans.badge')}
        </Box>
        <Box sx={s.genericTitleHeaderStyles}>
          {t('futurePlans.heading')}
        </Box>
      </Box>

      {Array.isArray(plans) && plans.map((plan, index) => (
        <Box key={index} sx={s.timelineCardContainerStyles}>
          <Box sx={s.standaloneIconAvatarStyles}>{plan.icon}</Box>
          <Box sx={s.projectMetaStackStyles}>
            <Box sx={s.technicalSubheadingStyles}>
              {plan.title}
            </Box>
            <Box sx={s.technicalParagraphTextStyles}>
              {plan.description}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FuturePlansSection;