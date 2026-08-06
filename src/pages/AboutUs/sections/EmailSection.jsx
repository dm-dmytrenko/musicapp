import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as s from './EmailSection.styles';

const EmailSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={s.sectionContainerStyles}>
      <Box sx={s.typographyStackStyles}>
        <Box component="h2" sx={s.mainHeadingStyles}>
          {t('email.heading')}
        </Box>
        <Box sx={s.subcaptionTextStyles}>
          {t('email.subcaption')}
        </Box>
      </Box>

      <Box sx={s.inputFormWrapperStyles}>
        <Box 
          component="input" 
          type="email" 
          placeholder={t('email.placeholder')} 
          sx={s.nativeInputStyles} 
        />
        <ActionButton
          onClick={() => {}}
          sx={s.actionButtonOverrideStyles}
        >
          {t('email.button')}
        </ActionButton>
      </Box>
    </Box>
  );
};

export default EmailSection;