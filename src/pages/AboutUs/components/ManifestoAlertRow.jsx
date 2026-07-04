import React from 'react';
import { Box } from '@mui/system';
import * as s from '../sections/ManifestoSection.styles';

const VARIANT_STYLES = {
  negative: s.negativeAlertRowContainerStyles,
  positive: s.positiveAlertRowContainerStyles,
  community: s.communityFeatureRowContainerStyles,
};

const ManifestoAlertRow = ({ variant, icon, children }) => (
  <Box sx={VARIANT_STYLES[variant]}>
    <Box sx={s.baselineIconGraphicStyles}>{icon}</Box>
    <Box sx={s.contentStatementBodyTextStyles}>{children}</Box>
  </Box>
);

export default ManifestoAlertRow;
