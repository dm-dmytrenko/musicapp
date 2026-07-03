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
        <span className="pixel-text" style={s.labelTypographyInlineStyles}>
          {labelLine1}<br />{labelLine2}
        </span>
      </Box>
    </Box>
  );
};

export default OptionTile;