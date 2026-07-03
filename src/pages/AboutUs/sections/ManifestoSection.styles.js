import { gradients, sharedStyles } from '../../../theme';

export const panelWrapperCardStyles = {
  width: '100%',
  maxWidth: '1300px',
  padding: '64px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  ...sharedStyles.glassCard,
};

export const primaryTitleLayoutStackStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: '12px'
};

export const absolutePolicyTagLabelStyles = { ...sharedStyles.uppercaseLabel };

export const highImpactHeadlineStyles = {
  fontSize: '46px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-1.5px', 
  lineHeight: 1.1
};

export const alertRowsFlexStackStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: '20px', 
  width: '100%'
};

export const negativeAlertRowContainerStyles = {
  ...sharedStyles.alertRow,
  background: 'error.light', 
  border: '1px solid',
  borderColor: 'error.border',
};

export const positiveAlertRowContainerStyles = {
  ...sharedStyles.alertRow,
  background: 'success.light', 
  border: '1px solid',
  borderColor: 'success.border',
};

export const communityFeatureRowContainerStyles = {
  ...sharedStyles.alertRow,
  background: gradients.communityFeature, 
  border: '1px dashed rgba(0, 68, 204, 0.25)', 
};

export const baselineIconGraphicStyles = {
  fontSize: '28px'
};

export const contentStatementBodyTextStyles = {
  fontSize: '18px', 
  fontWeight: 500, 
  color: 'primary.main', 
  lineHeight: 1.5
};
