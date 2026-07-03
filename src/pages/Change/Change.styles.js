export const pageGridContainerStyles = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  boxSizing: 'border-box',
  padding: '24px'
};

export const columnsFlexLayoutStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '32px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start'
};

export const verticalCardStackStyles = {
  flex: 1,
  minWidth: '360px',
  maxWidth: '540px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

export const controlRowGlassPanelStyles = {
  width: '100%',
  background: 'rgba(255, 255, 255, 0.4)',
  border: '2px solid rgba(255, 255, 255, 0.7)',
  borderRadius: '26px',
  padding: '28px 36px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  boxShadow: '0 20px 40px rgba(0, 70, 120, 0.04)'
};

export const configurationFieldLabelStyles = {
  fontSize: '23px',
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
  boxSizing: 'border-box',
  overflow: 'hidden'
};

export const commentTextAreaStyles = {
  width: '100%',
  height: '140px',
  background: 'rgba(255, 255, 255, 0.5)',
  border: '2px solid rgba(0, 68, 204, 0.15)',
  borderRadius: '22px',
  padding: '20px',
  boxSizing: 'border-box',
  fontSize: '18px',
  fontFamily: "'Inter', sans-serif",
  color: '#0044cc',
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
    padding: '24px 140px',
    fontSize: '28px',
    borderRadius: '40px',
    width: '100%',
    maxWidth: '520px'
  }
};