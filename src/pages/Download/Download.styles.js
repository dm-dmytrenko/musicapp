import { gradients, sharedStyles } from '../../theme';

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
  background: gradients.previewFrame,
  border: '2px solid',
  borderColor: 'background.glassBorderStrong',
  borderRadius: '36px',
  boxShadow: 27,
  ...sharedStyles.glassBlurStrong,
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
  padding: '24px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  ...sharedStyles.glassCardInteractive,
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
