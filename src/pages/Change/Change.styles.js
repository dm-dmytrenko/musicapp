import { sharedStyles } from '../../theme';

export const pageGridContainerStyles = {
  width: '100%',
  minWidth: '350px',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  boxSizing: 'border-box',
  padding: { xs: '16px', sm: '20px' }
};

export const columnsFlexLayoutStyles = {
  width: '100%',
  maxWidth: { xs: '100%', sm: '520px', md: '1040px' },
  display: 'grid',
  gridTemplateColumns: { 
    xs: '1fr', 
    '@media (min-width: 800px)': '1fr 1fr' 
  },
  gap: { xs: '12px', md: '16px' },
  margin: '0 auto',
  alignItems: 'stretch'
};

export const verticalCardStackStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

export const controlRowGlassPanelStyles = {
  width: '100%',
  borderRadius: '26px',
  padding: { xs: '16px 20px', sm: '20px 28px', md: '24px 36px' },
  minHeight: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  boxShadow: 25,
  boxSizing: 'border-box',
  ...sharedStyles.glassBlur,
  background: 'background.cardStrong',
  border: '2px solid rgba(255, 255, 255, 0.7)',
};

export const configurationFieldLabelStyles = {
  fontSize: { xs: '16px', sm: '18px', md: '22px' },
  fontWeight: 700,
  color: 'primary.main',
  letterSpacing: '-0.5px',
  lineHeight: 1.3,
  userSelect: 'none'
};

export const switchTrackFrameStyles = {
  width: '84px',
  height: '42px',
  borderRadius: '50px',
  position: 'relative',
  cursor: 'pointer',
  boxSizing: 'border-box',
  boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.05)',
  flexShrink: 0,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center'
};

export const switchGlossyOverlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)',
  borderRadius: '50px 50px 0 0',
  pointerEvents: 'none',
  zIndex: 3
};

export const switchHandleThumbStyles = {
  width: '36px',
  height: '36px',
  background: 'linear-gradient(to bottom, #ffffff 0%, #fcfcfc 40%, #ededed 80%, #e0e0e0 100%)',
  borderRadius: '50%',
  boxShadow: '0 3px 8px rgba(0,0,0,0.3), 0 1px 1px rgba(0,0,0,0.2), inset 0 1px 0 #fff',
  zIndex: 4,
  position: 'relative',
  '&::after': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)'
  }
};

export const commentsWrapperAnimatedContainerStyles = {
  width: '100%',
  maxWidth: { xs: '100%', sm: '520px', md: '1040px' },
  margin: '0 auto',
  boxSizing: 'border-box',
  overflow: 'hidden'
};

export const commentTextAreaStyles = {
  width: '100%',
  height: '100px',
  background: 'rgba(255, 255, 255, 0.5)',
  border: '2px solid rgba(0, 68, 204, 0.15)',
  borderRadius: '22px',
  padding: '20px',
  boxSizing: 'border-box',
  fontSize: { xs: '13px', sm: '14px', md: '15px' },
  fontFamily: 'typography.fontFamily',
  color: 'primary.main',
  outline: 'none',
  resize: 'none',
  boxShadow: 'inset 0 3px 6px rgba(0, 68, 204, 0.03)',
  transition: 'all 0.2s ease',
  '&:focus': {
    border: '2px solid #0077ff',
    background: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 15px 35px rgba(0, 119, 255, 0.08), inset 0 2px 5px rgba(0, 0, 0, 0.02)'
  }
};

export const actionContainerWrapperStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  mt: '8px',
  '& button': {
    padding: { xs: '14px 32px', sm: '16px 48px', md: '24px 140px' },
    fontSize: { xs: '16px', sm: '18px', md: '28px' },
    borderRadius: '40px',
    width: '100%',
    maxWidth: '520px'
  }
};