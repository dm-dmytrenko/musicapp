import { sharedStyles } from '../../../theme';

export const panelWrapperCardStyles = {
  width: '100%',
  minWidth: '350px',
  maxWidth: '1300px',
  padding: { xs: '28px 20px', sm: '40px 32px', md: '64px' },
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: '24px', sm: '32px', md: '40px' },
  boxSizing: 'border-box',
  borderRadius: { xs: '28px', sm: '36px', md: '40px' },
  ...sharedStyles.glassCard,
};

export const primaryTitleLayoutStackStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: { xs: '8px', sm: '12px' },
};

export const absolutePolicyTagLabelStyles = { 
  ...sharedStyles.uppercaseLabel,
  fontSize: { xs: '12px', md: '14px' },
};

export const highImpactHeadlineStyles = {
  fontSize: { xs: '28px', sm: '38px', md: '46px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: { xs: '-0.5px', md: '-1.5px' }, 
  lineHeight: 1.1,
  whiteSpace: 'pre-line',
};

export const alertRowsFlexStackStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: { xs: '14px', sm: '16px', md: '20px' }, 
  width: '100%',
};