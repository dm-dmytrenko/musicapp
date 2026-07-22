import { gradients, sharedStyles } from '../../theme';

export const masterStatusBarContainerStyles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: { xs: '12px 16px', md: '16px 4%' },
  borderBottom: '2px solid',
  borderColor: 'primary.light',
  boxSizing: 'border-box',
  fontFamily: 'typography.fontFamily',
  position: 'relative',
  minHeight: '64px'
};

export const leftContentGroupStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 'clamp(8px, 1.8vw, 24px)',
  maxWidth: 'calc(100% - 50px)'
};

export const navigationControlsStackStyles = {
  display: 'flex', 
  gap: '8px',
  flexShrink: 0
};

export const desktopStepProgressStackStyles = {
  display: 'flex', 
  alignItems: 'center', 
  gap: 'clamp(4px, 1.2vw, 16px)',
  '@media (max-width: 650px)': {
    display: 'none'
  }
};

export const arrowSpacerSeparatorStyles = {
  color: '#0077ff', 
  fontWeight: 900, 
  fontSize: 'clamp(10px, 1.1vw, 14px)',
  opacity: 0.5,
  userSelect: 'none',
  flexShrink: 0
};

export const stepGlassReflectionStyles = {
  ...sharedStyles.glossReflect,
  zIndex: 1,
};

export const stepTextLabelStyles = {
  position: 'relative', 
  zIndex: 2,
  whiteSpace: 'nowrap'
};

const navigationButtonBase = (canNavigate) => ({
  width: '36px',
  height: '36px',
  border: '2px solid',
  borderColor: 'primary.main',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'primary.main',
  cursor: canNavigate ? 'pointer' : 'not-allowed',
  opacity: canNavigate ? 1 : 0.4,
  fontSize: '12px',
  fontWeight: 'bold',
  transition: 'all 0.2s',
  boxShadow: '0 2px 8px rgba(0, 68, 204, 0.05)',
  '&:hover': canNavigate ? { 
    background: 'primary.light',
    transform: 'translateY(-1px)'
  } : {},
  '&:active': canNavigate ? { transform: 'translateY(0px)' } : {}
});

export const backNavigationButtonStyles = navigationButtonBase;
export const forwardNavigationButtonStyles = navigationButtonBase;

export const baseStepItemStyles = (currentPath, stepPath) => {
  const isActive = currentPath === stepPath;
  const activeStyles = isActive 
    ? {
        background: gradients.primaryButton,
        color: 'primary.contrastText',
        border: '1px solid',
        borderColor: 'primary.main',
        boxShadow: '0 8px 16px rgba(0, 85, 221, 0.18), inset 0 1px 1px rgba(255,255,255,0.5)',
        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        borderRadius: '10px'
      }
    : {
        background: 'transparent',
        color: 'primary.main',
        border: '1px solid transparent',
        boxShadow: 'none',
        borderRadius: '0px'
      };

  return {
    padding: 'clamp(4px, 0.6vw, 8px) clamp(8px, 1.2vw, 18px)',
    fontSize: 'clamp(10px, 1.1vw, 14px)',
    fontWeight: 800,
    letterSpacing: '0.2px',
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
    ...activeStyles,
    '&:hover': !isActive ? {
      color: '#0077ff'
    } : {}
  };
};

export const burgerToggleButtonStyles = {
  display: 'none',
  '@media (max-width: 650px)': {
    display: 'flex'
  },
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  border: '2px solid',
  borderColor: 'primary.main',
  borderRadius: '8px',
  cursor: 'pointer',
  boxSizing: 'border-box',
  userSelect: 'none',
  flexShrink: 0
};

export const burgerTextIconStyles = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'primary.main',
  lineHeight: 1
};

export const mobileMenuDropdownStyles = {
  display: 'none',
  '@media (max-width: 650px)': {
    display: 'flex'
  },
  flexDirection: 'column',
  position: 'absolute',
  top: 'calc(100% + 6px)',
  right: '16px',
  width: '200px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  border: '2px solid',
  borderColor: 'primary.light',
  borderRadius: '14px',
  padding: '8px',
  boxShadow: '0 10px 28px rgba(0, 68, 204, 0.15)',
  zIndex: 100,
  gap: '4px',
  animation: 'fadeInRight 0.2s cubic-bezier(0, 0, 0.2, 1)',
  '@keyframes fadeInRight': {
    '0%': { opacity: 0, transform: 'translateX(10px) scale(0.96)' },
    '100%': { opacity: 1, transform: 'translateX(0) scale(1)' }
  }
};

export const mobileStepItemStyles = (currentPath, stepPath) => {
  const isActive = currentPath === stepPath;
  
  return {
    padding: '10px 14px',
    fontSize: '12px',
    fontWeight: 800,
    borderRadius: '8px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    background: isActive ? gradients.primaryButton : 'transparent',
    color: isActive ? 'primary.contrastText' : 'primary.main',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: isActive ? gradients.primaryButton : 'rgba(0, 68, 204, 0.08)'
    }
  };
};