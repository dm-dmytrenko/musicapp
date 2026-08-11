import { sharedStyles } from '../../../theme';

export const centeredLayoutRootStyles = {
  maxWidth: '1040px',
  minWidth: '350px',
  width: '100%', 
  textAlign: 'center', 
  ...sharedStyles.centeredColumn,
  gap: { xs: '20px', sm: '24px', md: '32px' }, 
  pt: { xs: '2vh', sm: '3vh', md: '4vh' },
  px: { xs: '16px', sm: '24px' },
  boxSizing: 'border-box'
};

export const floatingPillBadgeStyles = {
  fontSize: { xs: '10px', sm: '12px', md: '14px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: { xs: '2px', sm: '3px' }, 
  background: 'primary.light', 
  padding: { xs: '6px 14px', sm: '8px 20px' }, 
  borderRadius: '50px'
};

export const masterPageHeadlineStyles = {
  fontSize: { xs: '32px', sm: '48px', md: '56px', lg: '64px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  margin: 0, 
  lineHeight: { xs: 1.15, md: 1.05 }, 
  letterSpacing: { xs: '-1px', md: '-2.5px' },
  wordBreak: 'break-word'
};

export const productSubtextDescriptionStyles = {
  fontSize: { xs: '15px', sm: '18px', md: '22px' }, 
  ...sharedStyles.bodyText,
  maxWidth: '750px', 
  lineHeight: 1.5,
  px: { xs: '8px', sm: '0' }
};

export const ctaButtonWrapperStyles = {
  mt: { xs: '8px', sm: '12px' },
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& button': {
    width: { xs: '100%', sm: 'auto' },
    maxWidth: '360px'
  }
};