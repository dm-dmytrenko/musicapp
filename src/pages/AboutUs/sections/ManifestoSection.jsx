import React from 'react';
import { Box } from '@mui/system';
import * as s from './ManifestoSection.styles';

const ManifestoSection = () => (
  <Box sx={s.panelWrapperCardStyles}>
    
    <Box sx={s.primaryTitleLayoutStackStyles}>
      <Box sx={s.absolutePolicyTagLabelStyles}>OUR NO-SCAM POLICY</Box>
      <Box sx={s.highImpactHeadlineStyles}>
        No accounts. No forcing. Just focus on the music.
      </Box>
    </Box>

    <Box sx={s.alertRowsFlexStackStyles}>
      
      <Box sx={s.negativeAlertRowContainerStyles}>
        <Box sx={s.baselineIconGraphicStyles}>❌</Box>
        <Box sx={s.contentStatementBodyTextStyles}>
          <b>We hate subscription traps</b> and data-harvesting setups just as much as you do.
        </Box>
      </Box>

      <Box sx={s.positiveAlertRowContainerStyles}>
        <Box sx={s.baselineIconGraphicStyles}>✅</Box>
        <Box sx={s.contentStatementBodyTextStyles}>
          <b>Zero mandatory registrations.</b> You don't need a profile, password, or credit card to fully process your music layout results here.
        </Box>
      </Box>

      <Box sx={s.communityFeatureRowContainerStyles}>
        <Box sx={s.baselineIconGraphicStyles}>🔒</Box>
        <Box sx={s.contentStatementBodyTextStyles}>
          <b>100% Free Baseline Tools.</b> Everything we have right now—and our core asset pipelines down the line—will remain free forever. Everything is optimized for the community.
        </Box>
      </Box>

    </Box>
  </Box>
);

export default ManifestoSection;