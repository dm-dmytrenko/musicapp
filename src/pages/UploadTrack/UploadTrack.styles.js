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
  width: '100vw',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 5%',
  boxSizing: 'border-box',
  background: 'transparent', 
  overflow: 'hidden',
  fontFamily: 'typography.fontFamily'
};

export const mainStackContainerStyles = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4vh',
  position: 'relative',
  zIndex: 3,
  boxSizing: 'border-box'
};

export const masterHeadingStyles = {
  fontSize: '4.5vw', 
  minFontSize: '36px',
  fontWeight: 800, 
  color: 'primary.main',  
  margin: 0,
  letterSpacing: '-1px',
  textShadow: '0 2px 10px rgba(0, 68, 204, 0.1)'
};

export const interactionDropzoneCardStyles = {
  width: '100%',
  height: '45vh',
  minHeight: '300px',
  borderRadius: '32px',
  ...sharedStyles.glassBlurStrong,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
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
  width: '90%', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '28px', 
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
  fontSize: '16px', 
  background: 'rgba(255,255,255,0.6)', 
  backdropFilter: 'blur(10px)', 
  padding: '6px 14px', 
  borderRadius: '14px', 
  border: '1px solid rgba(255,255,255,0.8)'
};

export const audioPlaybackActionButtonStyles = {
  width: '58px',
  height: '58px',
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
  height: '85px',
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
  backdropFilter: 'blur(4px)'
};

export const genericFooterCaptionTextStyles = {
  fontSize: '12px', 
  fontWeight: 600, 
  color: 'rgba(0, 68, 204, 0.5)', 
  letterSpacing: '0.2px',
  ...sharedStyles.userSelectNone,
  cursor: 'default'
};
