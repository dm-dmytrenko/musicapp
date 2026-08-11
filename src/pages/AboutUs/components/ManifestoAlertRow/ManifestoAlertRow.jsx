import React from 'react';
import { Box } from '@mui/system';
import * as s from './ManifestoAlertRow.styles';

const ManifestoAlertRow = ({ variant, icon, children }) => {
  return (
    <Box sx={s.getAlertRowStyles(variant)}>
      <Box component="span" sx={s.baselineIconGraphicStyles}>
        {icon}
      </Box>
      <Box sx={s.contentStatementBodyTextStyles}>
        {children}
      </Box>
    </Box>
  );
};

export default ManifestoAlertRow;