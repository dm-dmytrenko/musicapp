import { createTheme } from '@mui/material/styles';

export const gradients = {
  primaryButton: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
  primaryButtonDisabled: 'linear-gradient(to bottom, #d5f3ff 0%, #b3d7ff 100%)',
  previewFrame: 'linear-gradient(135deg, rgba(182, 235, 252, 0.5) 0%, rgba(238, 252, 255, 0.6) 100%)',
  communityFeature: 'linear-gradient(135deg, rgba(0, 68, 204, 0.06) 0%, rgba(0, 119, 255, 0.02) 100%)',
  playButton: 'linear-gradient(135deg, #22bbff 0%, #0055dd 100%)',
};

export const sharedStyles = {
  glossReflect: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)',
    pointerEvents: 'none',
  },
  glossReflectElevated: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  glassBlur: {
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },
  glassBlurStrong: {
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
  },
  userSelectNone: {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  },
  uppercaseLabel: {
    fontSize: '13px',
    fontWeight: 900,
    color: 'primary.main',
    letterSpacing: '2px',
  },
  glassCard: {
    background: 'background.cardStrong',
    border: '2px solid',
    borderColor: 'background.glassBorderStrong',
    borderRadius: '40px',
    boxSizing: 'border-box',
    boxShadow: 27,
  },
  glassCardMedium: {
    background: 'background.card',
    border: '2px solid',
    borderColor: 'background.glassBorder',
    boxSizing: 'border-box',
    boxShadow: 25,
  },
  glassCardInteractive: {
    background: 'background.cardStrong',
    border: '2px solid',
    borderColor: 'background.glassBorder',
    borderRadius: '28px',
    boxShadow: 25,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: 'background.cardHover',
      transform: 'translateY(-2px)',
      boxShadow: 26,
    },
    '&:active': { transform: 'translateY(0px)' },
  },
  primaryButtonBase: {
    background: gradients.primaryButton,
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: '24px',
    textAlign: 'center',
    fontWeight: 800,
    color: 'primary.contrastText',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
    textShadow: '0 1px 3px rgba(0,0,0,0.3)',
    transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:active': { transform: 'scale(0.98) translateY(0px)' },
  },
  iconBadge: {
    background: 'primary.light',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
  },
  bodyText: {
    fontWeight: 500,
    color: 'primary.main',
    opacity: 0.8,
  },
  centeredColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  alertRow: {
    width: '100%',
    borderRadius: '24px',
    padding: '28px 36px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#0044cc',
      light: 'rgba(0, 68, 204, 0.08)',
      dark: '#0033aa',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff4444',
      light: 'rgba(255, 68, 68, 0.06)',
      border: 'rgba(255, 68, 68, 0.15)',
    },
    success: {
      main: '#00cc88',
      light: 'rgba(0, 204, 136, 0.06)',
      border: 'rgba(0, 204, 136, 0.15)',
    },
    background: {
      card: 'rgba(255, 255, 255, 0.3)',
      cardStrong: 'rgba(255, 255, 255, 0.4)',
      cardHover: 'rgba(255, 255, 255, 0.45)',
      glassBorder: 'rgba(255, 255, 255, 0.6)',
      glassBorderStrong: 'rgba(255, 255, 255, 0.8)',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  shadows: [
    ...createTheme().shadows,
    '0 20px 40px rgba(0, 70, 120, 0.02)',
    '0 25px 50px rgba(0, 70, 120, 0.02)',
    '0 40px 80px rgba(0, 70, 120, 0.03)',
  ]
});

export default theme;
