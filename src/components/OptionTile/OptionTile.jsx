import React from 'react';
import { Box } from '@mui/system';
import * as s from './OptionTitle.styles';

const OptionTile = ({ optionNum, icon, labelLine1, labelLine2, isSelected, onClick }) => {
  return (
    <Box 
      onClick={onClick}
      sx={s.tileCardRootStyles(isSelected)}
    >
      <Box sx={s.ribbonHeaderStyles}>
        <span>{optionNum}</span>
      </Box>

      <Box sx={s.centerContentBodyStyles}>
        <Box sx={s.oversizedIconTextStyles}>{icon}</Box>
          <Box 
            component="span" 
            className="pixel-text" 
            sx={s.labelTypographyInlineStyles}
          >
            {labelLine1}<br />{labelLine2}
          </Box>
      </Box>
    </Box>
  );
};

export default OptionTile;