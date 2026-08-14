export const viewportWrapperStyles = {
  width: '100vw',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2vh 5%',
  boxSizing: 'border-box',
  background: 'transparent',
  minWidth: '350px',
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
  display: 'grid', 
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2%',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  transform: 'translateY(-2vh)',

  '@media (max-width: 900px)': {
    gridTemplateColumns: 'minmax(0, 400px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '500px',
    transform: 'translateY(0)',
  }
};