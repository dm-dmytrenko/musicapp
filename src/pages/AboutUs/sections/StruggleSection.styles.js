import { gradients, sharedStyles } from '../../../theme';

export const sectionGlassCardStyles = {
  width: '100%',
  maxWidth: '1300px',
  padding: '64px',
  display: 'flex',
  flexDirection: 'row',
  gap: '64px',
  flexWrap: 'wrap',
  alignItems: 'center',
  background: 'background.cardStrong',
  border: '2px solid',
  borderColor: 'background.glassBorderStrong',
  borderRadius: '40px',
  boxSizing: 'border-box',
  boxShadow: '0 40px 80px rgba(0, 70, 120, 0.05)',
  ...sharedStyles.glassBlur,
};

export const narrativeTextColumnStyles = {
  flex: '1.2', 
  minWidth: '340px', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '20px'
};

export const highContrastAlertLabelStyles = {
  ...sharedStyles.uppercaseLabel,
  color: 'error.main',
};

export const coreProblemHeadingStyles = {
  fontSize: '42px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-1.5px', 
  lineHeight: 1.15
};

export const behavioralListWrapperStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: '14px', 
  fontSize: '17px', 
  fontWeight: 500, 
  color: 'primary.main', 
  opacity: 0.85, 
  lineHeight: 1.6
};

export const metricsHighlightBoxStyles = {
  flex: '0.8', 
  minWidth: '320px', 
  background: gradients.communityFeature, 
  borderRadius: '28px', 
  padding: '48px 32px', 
  textAlign: 'center',
  border: '1px dashed rgba(0, 68, 204, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px'
};

export const structuralImpactEmojiStyles = {
  fontSize: '54px', 
  margin: 0
};

export const calloutSubheadingStyles = {
  fontSize: '28px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-0.5px'
};

export const solutionSummaryParagraphStyles = {
  fontSize: '16px', 
  fontWeight: 500, 
  color: 'primary.main', 
  opacity: 0.75, 
  lineHeight: 1.5
};
