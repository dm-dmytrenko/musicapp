import React from 'react';
import { Box } from '@mui/system';
import { useTranslation, Trans } from 'react-i18next';
import ManifestoAlertRow from '../components/ManifestoAlertRow';
import * as s from './ManifestoSection.styles';

const ManifestoSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={s.panelWrapperCardStyles}>
      <Box sx={s.primaryTitleLayoutStackStyles}>
        <Box sx={s.absolutePolicyTagLabelStyles}>
          {t('manifesto.badge')}
        </Box>
        <Box component="h2" sx={s.highImpactHeadlineStyles}>
          <Trans i18nKey="manifesto.heading" components={{ br: <br /> }} />
        </Box>
      </Box>

      <Box sx={s.alertRowsFlexStackStyles}>
        <ManifestoAlertRow variant="negative" icon="❌">
          <Trans i18nKey="manifesto.row1_bold">
            <b>We hate subscription traps</b> and data-harvesting setups just as much as you do.
          </Trans>
        </ManifestoAlertRow>

        <ManifestoAlertRow variant="positive" icon="✅">
          <Trans i18nKey="manifesto.row2_bold">
            <b>Zero mandatory registrations.</b> You don't need a profile, password, or credit card to fully process your music layout results here.
          </Trans>
        </ManifestoAlertRow>

        <ManifestoAlertRow variant="community" icon="🔒">
          <Trans i18nKey="manifesto.row3_bold">
            <b>100% Free Baseline Tools.</b> Everything we have right now—and our core asset pipelines down the line—will remain free forever. Everything is optimized for the community.
          </Trans>
        </ManifestoAlertRow>
      </Box>
    </Box>
  );
};

export default ManifestoSection;