import { gradients, sharedStyles } from '../../theme';

export const masterStatusBarContainerStyles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '24px 5%',
  gap: '32px',
  borderBottom: '2px solid',
  borderColor: 'primary.light',
  boxSizing: 'border-box',
  fontFamily: 'typography.fontFamily'
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
  ...sharedStyles.glossReflect,
  zIndex: 1,
};

export const stepTextLabelStyles = {
  position: 'relative', 
  zIndex: 2
};

const navigationButtonBase = (canNavigate) => ({
  width: '40px',
  height: '40px',
  border: '2px solid',
  borderColor: 'primary.main',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'primary.main',
  cursor: canNavigate ? 'pointer' : 'not-allowed',
  opacity: canNavigate ? 1 : 0.4,
  fontSize: '14px',
  fontWeight: 'bold',
  transition: 'all 0.2s',
  boxShadow: '0 4px 10px rgba(0, 68, 204, 0.05)',
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
        boxShadow: '0 12px 24px rgba(0, 85, 221, 0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        borderRadius: '12px'
      }
    : {
        background: 'transparent',
        color: 'primary.main',
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
