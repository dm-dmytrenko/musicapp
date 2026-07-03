import React from 'react';
import { Box } from '@mui/system';
import * as s from './ActionButton.styles';

const ActionButton = ({ text = 'Generate', onClick }) => {
  return (
    <Box 
      component="button"
      onClick={onClick}
      sx={s.buttonElementStyles}
    >
      <Box sx={s.linearGlossHighlightStyles} />
      <Box component="span" sx={s.internalTextWrapperStyles}>
        {text}
      </Box>
    </Box>
  );
};

export default ActionButton;