import { keyframes } from '@mui/system';
import { gradients, sharedStyles } from '../../theme';

export const oceanRiseUp = keyframes`
  0% { top: 100%; }
  100% { top: -20%; }
`;

export const oceanChopLeft = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const oceanChopRight = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

export const pageWrapperStyles = {
  width: '100%',
  minWidth: '350px',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: { xs: '16px', sm: '24px', md: '32px' },
  boxSizing: 'border-box',
  background: 'transparent', 
  overflowX: 'hidden',
  fontFamily: 'typography.fontFamily'
};

export const mainStackContainerStyles = {
  width: '100%',
  maxWidth: '1040px',
  minWidth: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: { xs: '20px', sm: '28px', md: '36px' },
  position: 'relative',
  zIndex: 3,
  boxSizing: 'border-box'
};

export const masterHeadingStyles = {
  fontSize: { xs: '28px', sm: '36px', md: '44px', lg: '52px' },
  fontWeight: 800, 
  color: 'primary.main',  
  margin: 0,
  letterSpacing: '-1px',
  textAlign: 'center',
  textShadow: '0 2px 10px rgba(0, 68, 204, 0.1)'
};

export const interactionDropzoneCardStyles = {
  width: '100%',
  minHeight: { xs: '260px', sm: '300px', md: '340px' },
  borderRadius: '32px',
  ...sharedStyles.glassBlurStrong,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: { xs: '20px 16px', sm: '28px 24px', md: '36px 32px' },
  gap: '12px',
  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden'
};

export const liquidWaveBackdropContainerStyles = {
  position: 'absolute',
  left: 0,
  width: '100%',
  height: '140%',
  zIndex: 1,
  animation: `${oceanRiseUp} 0.8s cubic-bezier(0.1, 0.8, 0.25, 1) forwards`
};

export const sharedWaveOverlayStyles = {
  position: 'absolute',
  borderRadius: '40%',
  width: '150%',
  height: '150%'
};

export const trimmerCentralGridStyles = {
  width: '100%', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: { xs: '16px', sm: '22px', md: '28px' }, 
  zIndex: 2
};

export const trimmerLayoutHeaderRowStyles = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  width: '100%'
};

export const trimmerBadgeTextStyles = {
  color: 'primary.main', 
  fontWeight: 800, 
  fontSize: { xs: '12px', sm: '14px', md: '16px' }, 
  background: 'rgba(255,255,255,0.6)', 
  backdropFilter: 'blur(10px)', 
  padding: { xs: '4px 10px', sm: '6px 14px' }, 
  borderRadius: '14px', 
  border: '1px solid rgba(255,255,255,0.8)'
};

export const audioPlaybackActionButtonStyles = {
  width: { xs: '46px', sm: '52px', md: '58px' },
  height: { xs: '46px', sm: '52px', md: '58px' },
  borderRadius: '50%',
  background: gradients.playButton,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 8px 20px rgba(0,68,204,0.35), inset 0 1px 1px rgba(255,255,255,0.3)',
  transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': { transform: 'scale(1.08)', boxShadow: '0 12px 24px rgba(0,68,204,0.45)' },
  '&:active': { transform: 'scale(0.95)' }
};

export const interactiveTimelineTrackStyles = {
  width: '100%',
  height: { xs: '65px', sm: '75px', md: '85px' },
  background: 'rgba(0, 68, 204, 0.05)',
  borderRadius: '20px',
  position: 'relative',
  cursor: 'ew-resize',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px',
  boxSizing: 'border-box',
  border: '1px solid rgba(0, 68, 204, 0.08)',
  backdropFilter: 'blur(4px)',
  containerType: 'inline-size'
};

export const readyBadgeStyles = {
  color: '#0044cc',
  fontWeight: 900,
  letterSpacing: '1px',
  textShadow: '0 1px 2px rgba(255,255,255,0.6)',
  userSelect: 'none',
  background: 'rgba(255,255,255,0.7)',
  borderRadius: '6px',
  fontSize: '10px',
  padding: '2px 8px',
  lineHeight: 1.1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  display: 'none',
  '@media (min-width: 850px)': {
    display: 'block'
  },
  '@media (min-width: 850px) and (max-width: 1100px)': {
    fontSize: '7px',
    padding: '2px 3px',
    letterSpacing: '0.5px'
  }
};

export const genericFooterCaptionTextStyles = {
  fontSize: { xs: '11px', sm: '12px', md: '13px' }, 
  fontWeight: 600, 
  color: 'rgba(0, 68, 204, 0.5)', 
  letterSpacing: '0.2px',
  textAlign: 'center',
  ...sharedStyles.userSelectNone,
  cursor: 'default'
};

export const actionContainerWrapperStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& button': {
    padding: { xs: '16px 40px', sm: '20px 80px', md: '24px 140px' },
    fontSize: { xs: '20px', sm: '24px', md: '28px' },
    borderRadius: '40px',
    width: '100%',
    maxWidth: '520px'
  }
};