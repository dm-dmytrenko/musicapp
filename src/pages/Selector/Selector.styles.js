export const viewportWrapperStyles = {
  width: '100vw',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2vh 5%',
  boxSizing: 'border-box',
  background: 'transparent',
  overflow: 'hidden'
};

export const mainContentContainerStyles = {
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1400px',
  height: '100%',
  position: 'relative', 
  zIndex: 3 
};

export const optionsRowGridStyles = {
  display: 'flex', 
  flexDirection: 'row', 
  gap: '3.5%',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  transform: 'translateY(-2vh)'
};

export const generateButtonBaseStyles = {
  width: '35%',
  maxWidth: '340px',
  borderRadius: '20px',
  padding: '18px',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  marginTop: '4vh',
  transition: 'all 0.2s',
  '&:active': {
    transform: 'translateY(0px)'
  }
};

export const buttonGlossReflectStyles = {
  position: 'absolute', 
  top: 0, 
  left: 0, 
  right: 0, 
  height: '50%', 
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)'
};