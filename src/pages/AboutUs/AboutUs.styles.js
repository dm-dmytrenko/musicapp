import { sharedStyles } from '../../theme';

export const masterScrollWrapperStyles = {
  width: '100%',
  minWidth: '350px',
  height: '100vh',
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  scrollBehavior: 'smooth',
  boxSizing: 'border-box',
  background: 'transparent',
  fontFamily: 'typography.fontFamily',
  '&::-webkit-scrollbar': { width: '0px' },
};

export const sectionContainerStyles = {
  width: '100%',
  minWidth: '350px',
  minHeight: '100vh',
  height: { xs: 'auto', md: '100vh' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollSnapAlign: 'start',
  boxSizing: 'border-box',
  padding: { xs: '60px 16px', sm: '40px 24px', md: '40px 5%' }
};

export const footerCtaStackStyles = {
  ...sharedStyles.centeredColumn,
  gap: { xs: '20px', sm: '26px', md: '32px' }, 
  textAlign: 'center',
  maxWidth: '900px',
  width: '100%',
  px: { xs: '12px', sm: '0' },
  boxSizing: 'border-box'
};

export const footerCtaHeadlineStyles = {
  fontSize: { xs: '32px', sm: '48px', md: '56px', lg: '64px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  margin: 0, 
  lineHeight: { xs: 1.15, md: 1.05 }, 
  letterSpacing: { xs: '-1px', md: '-2.5px' },
  wordBreak: 'break-word',
  maxWidth: '850px'
};