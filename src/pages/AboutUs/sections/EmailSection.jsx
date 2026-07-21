import React from 'react';
import { Box } from '@mui/system';
import ActionButton from '../../../components/ActionButton/ActionButton';
import * as s from './EmailSection.styles';

const EmailSection = () => (
  <Box sx={s.sectionContainerStyles}>
    <Box sx={s.typographyStackStyles}>
      <Box component="h2" sx={s.mainHeadingStyles}>
        Don't miss an opportunity.
      </Box>
      <Box sx={s.subcaptionTextStyles}>
        Follow our email list only if you want to be the first to know when new modules and tools drop. No spam, no marketing trash. Completely optional.
      </Box>
    </Box>

    <Box sx={s.inputFormWrapperStyles}>
      <Box 
        component="input" 
        type="email" 
        placeholder="Enter your email address" 
        sx={s.nativeInputStyles} 
      />
      <ActionButton
        onClick={() => {}}
        sx={s.actionButtonOverrideStyles}
      >
        Follow
      </ActionButton>
    </Box>
  </Box>
);

export default EmailSection;