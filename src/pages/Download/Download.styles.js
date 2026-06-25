import { alpha } from '@mui/material/styles';

export const pageWrapperStyles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 5%',
  fontFamily: 'typography.fontFamily'
};

export const contentLayoutGridStyles = {
  width: '100%',
  maxWidth: '1250px',
  display: 'flex',
  flexDirection: 'row',
  gap: '7vw',
  justifyContent: 'center',
  alignItems: 'center'
};

export const previewFrameCardStyles = {
  flex: 1,
  maxWidth: '520px',
  aspectRatio: '1 / 1',
  background: 'linear-gradient(135deg, rgba(182, 235, 252, 0.5) 0%, rgba(238, 252, 255, 0.6) 100%)',
  border: '2px solid',
  borderColor: 'background.glassBorderStrong',
  borderRadius: '36px',
  boxShadow: 27,
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  gap: '15px'
};

export const interactivePanelStackStyles = {
  flex: 1,
  maxWidth: '560px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5vh'
};

export const infoRowStyles = {
  width: '100%',
  background: 'background.cardStrong',
  border: '2px solid',
  borderColor: 'background.glassBorder',
  borderRadius: '28px',
  padding: '24px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: 25,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'background.cardHover',
    transform: 'translateY(-2px)',
    boxShadow: 26
  },
  '&:active': { transform: 'translateY(0px)' }
};

export const infoRowLabelStyles = {
  fontSize: '13px',
  fontWeight: 800,
  color: 'primary.main',
  opacity: 0.6,
  letterSpacing: '0.6px'
};

export const infoRowValueStyles = {
  fontSize: '1.8vw',
  minFontSize: '18px',
  fontWeight: 700,
  color: 'primary.main'
};

export const thankYouMessageTextStyles = {
  fontSize: '1.4vw',
  minFontSize: '15px',
  fontWeight: 600,
  color: 'primary.main',
  lineHeight: '1.6',
  textAlign: 'center',
  marginTop: '1.5vh',
  padding: '0 12px'
};

export const primaryButtonStyles = {
  background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
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
  '&:active': { transform: 'scale(0.98) translateY(0px)' }
};

export const buttonGlossReflectStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)',
  pointerEvents: 'none'
};

export const iconWrapperStyles = {
  width: '24px',
  height: '24px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.7
};

export const iconBaseStyles = {
  width: '13px',
  height: '16px',
  border: '2px solid',
  borderColor: 'primary.main',
  borderRadius: '3px',
  position: 'absolute'
};