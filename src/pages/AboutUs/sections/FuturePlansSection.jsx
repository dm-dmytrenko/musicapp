import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import * as s from './FuturePlansSection.styles';

const FuturePlansSection = () => {
  const { t } = useTranslation();

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

      <Box sx={s.timelineCardContainerStyles}>
        <Box sx={s.standaloneIconAvatarStyles}>📈</Box>
        <Box sx={s.projectMetaStackStyles}>
          <Box sx={s.technicalSubheadingStyles}>
            {t('futurePlans.title')}
          </Box>
          <Box sx={s.technicalParagraphTextStyles}>
            {t('futurePlans.description')}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FuturePlansSection;