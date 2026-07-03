export const buttonElementStyles = {
  background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
  color: '#ffffff',
  border: '2px solid #0044cc',
  borderRadius: '24px',
  padding: '16px 48px',
  fontSize: '20px',
  fontWeight: 900,
  letterSpacing: '-0.5px',
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 15px 30px rgba(0, 85, 221, 0.25), inset 0 2px 2px rgba(255, 255, 255, 0.6)',
  textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 20px 40px rgba(0, 85, 221, 0.35), inset 0 2px 2px rgba(255, 255, 255, 0.6)',
    filter: 'brightness(1.05)'
  },
  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: '0 8px 16px rgba(0, 85, 221, 0.2), inset 0 1px 4px rgba(0, 0, 0, 0.2)'
  }
};

export const linearGlossHighlightStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
  zIndex: 1,
  pointerEvents: 'none'
};

export const internalTextWrapperStyles = {
  position: 'relative',
  zIndex: 2
};