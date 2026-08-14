import { gradients, sharedStyles } from '../../theme';

export const pageWrapperStyles = {
  width: '100%',
  minWidth: '350px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 5%',
  overflow: 'hidden',
  boxSizing: 'border-box',
  fontFamily: 'typography.fontFamily'
};

export const contentLayoutGridStyles = {
  width: '100%',
  maxWidth: '1250px',
  display: 'flex',
  flexDirection: 'row',
  gap: '7vw',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 950px)': {
    flexDirection: 'column',
    gap: '12px'
  }
};

export const previewFrameCardStyles = {
  flex: '1 1 auto',
  width: '100%',
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
  gap: '15px',
  '@media (max-width: 950px)': {
    maxWidth: '400px',
    borderRadius: '28px',
  },
  '@media (max-width: 500px)': {
    maxWidth: '280px',
    borderRadius: '24px',
  }
};

export const pixelArtImageElementStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
  display: 'block'
};

export const interactivePanelStackStyles = {
  flex: 1,
  maxWidth: '520px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5vh',
  '@media (max-width: 950px)': {
    maxWidth: '400px',
    gap: '2vh',
  },
  '@media (max-width: 500px)': {
    maxWidth: '280px',
  }
};

export const infoRowStyles = {
  width: '100%',
  padding: '24px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  ...sharedStyles.glassCardInteractive,
  '@media (max-width: 950px)': {
    padding: '10px 16px',
    borderRadius: '16px',
  },
  '@media (max-width: 500px)': {
    padding: '12px 12px',
  }
};

export const infoRowLabelStyles = {
  fontSize: '12px',
  fontWeight: 800,
  color: 'primary.main',
  opacity: 0.6,
  letterSpacing: '0.6px',
  '@media (max-width: 500px)': {
    fontSize: '11px',
  }
};

export const infoRowValueStyles = {
  fontSize: '18px',
  minFontSize: '18px',
  fontWeight: 700,
  color: 'primary.main',
  '@media (max-width: 950px)': {
    fontSize: '16px',
  },
  '@media (max-width: 500px)': {
    fontSize: '15px',
  }
};

export const thankYouMessageTextStyles = {
  fontSize: '15px',
  minFontSize: '15px',
  fontWeight: 600,
  color: 'primary.main',
  lineHeight: '1.6',
  textAlign: 'center',
  marginTop: '1.5vh',
  padding: '0 12px',
  '@media (max-width: 500px)': {
    fontSize: '10px',
    margin: '4px 0',
  }
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
