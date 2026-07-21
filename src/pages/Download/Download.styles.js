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
  gap: '15px',
  '@media (max-width: 950px)': {
    maxWidth: '39%',
    borderRadius: '24px',
    aspectRatio: '1 / 1',
  },
  '@media (max-width: 850px)': {
    maxWidth: '45%',
  },
  '@media (max-width: 800px)': {
    maxWidth: '50%',
  },
  '@media (max-width: 500px)': {
    width: '100%',
    maxWidth: '320px',
    aspectRatio: '1 / 1',
  }
};

export const pixelArtImageElementStyles = {
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '20px',
  display: 'block'
};

export const interactivePanelStackStyles = {
  flex: 1,
  maxWidth: '560px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5vh',
  '@media (max-width: 950px)': {
    gap: '2.5vh',
  },
  '@media (max-width: 500px)': {
    width: '100%',
    maxWidth: '320px',
    gap: '6px',
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
  fontSize: '1.8vw',
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
  padding: '0 12px',
  '@media (max-width: 500px)': {
    fontSize: '9px',
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
