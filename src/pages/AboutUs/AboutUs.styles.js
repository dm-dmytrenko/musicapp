export const masterScrollWrapperStyles = {
  width: '100%',
  height: '100vh',
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  scrollBehavior: 'smooth',
  boxSizing: 'border-box',
  background: 'transparent',
  fontFamily: "'Inter', sans-serif",
  '&::-webkit-scrollbar': { width: '0px' },
};

export const sectionContainerStyles = {
  width: '100%',
  minHeight: '100vh',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollSnapAlign: 'start',
  boxSizing: 'border-box',
  padding: '40px 5%'
};

export const footerCtaStackStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '32px', 
  textAlign: 'center'
};

export const footerCtaHeadlineStyles = {
  fontSize: '52px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-2px', 
  lineHeight: 1.1, 
  maxWidth: '800px'
};