export const masterStatusBarContainerStyles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '24px 5%',
  gap: '32px',
  borderBottom: '2px solid rgba(0, 68, 204, 0.15)',
  boxSizing: 'border-box',
  fontFamily: "'Inter', sans-serif"
};

export const navigationControlsStackStyles = {
  display: 'flex', 
  gap: '12px'
};

export const stepProgressStackStyles = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '20px'
};

export const arrowSpacerSeparatorStyles = {
  color: '#0077ff', 
  fontWeight: 900, 
  fontSize: '16px', 
  opacity: 0.5
};

export const stepGlassReflectionStyles = {
  position: 'absolute', 
  top: 0, 
  left: 0, 
  right: 0, 
  height: '50%', 
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)', 
  zIndex: 1
};

export const stepTextLabelStyles = {
  position: 'relative', 
  zIndex: 2
};

export const backNavigationButtonStyles = (canNavigate) => ({
  width: '40px',
  height: '40px',
  border: '2px solid #0044cc',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0044cc',
  cursor: canNavigate ? 'pointer' : 'not-allowed',
  opacity: canNavigate ? 1 : 0.4,
  fontSize: '14px',
  fontWeight: 'bold',
  transition: 'all 0.2s',
  boxShadow: '0 4px 10px rgba(0, 68, 204, 0.05)',
  '&:hover': canNavigate ? { 
    background: 'rgba(0, 68, 204, 0.05)',
    transform: 'translateY(-1px)'
  } : {},
  '&:active': canNavigate ? { transform: 'translateY(0px)' } : {}
});

export const forwardNavigationButtonStyles = (canNavigate) => ({
  width: '40px',
  height: '40px',
  border: '2px solid #0044cc',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0044cc',
  cursor: canNavigate ? 'pointer' : 'not-allowed',
  opacity: canNavigate ? 1 : 0.4,
  fontSize: '14px',
  fontWeight: 'bold',
  transition: 'all 0.2s',
  boxShadow: '0 4px 10px rgba(0, 68, 204, 0.05)',
  '&:hover': canNavigate ? { 
    background: 'rgba(0, 68, 204, 0.05)',
    transform: 'translateY(-1px)'
  } : {},
  '&:active': canNavigate ? { transform: 'translateY(0px)' } : {}
});

export const baseStepItemStyles = (currentPath, stepPath) => {
  const isActive = currentPath === stepPath;
  const activeStyles = isActive 
    ? {
        background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
        color: '#ffffff',
        border: '1px solid #0044cc',
        boxShadow: '0 12px 24px rgba(0, 85, 221, 0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        borderRadius: '12px'
      }
    : {
        background: 'transparent',
        color: '#0044cc',
        border: '1px solid transparent',
        boxShadow: 'none',
        borderRadius: '0px'
      };

  return {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 800,
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    ...activeStyles,
    '&:hover': !isActive ? {
      color: '#0077ff'
    } : {}
  };
};