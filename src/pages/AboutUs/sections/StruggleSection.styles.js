import { gradients, sharedStyles } from '../../../theme';

export const sectionGlassCardStyles = {
  width: '100%',
  minWidth: '350px',
  maxWidth: '1300px',
  padding: { xs: '32px', sm: '48px', md: '64px' },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: { xs: '32px', md: '64px' },
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
  flex: '1',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

export const highContrastAlertLabelStyles = {
  ...sharedStyles.uppercaseLabel,
  color: 'error.main',
  fontSize: { xs: '12px', md: '14px' }
};

export const coreProblemHeadingStyles = {
  fontSize: { xs: '28px', sm: '36px', md: '42px' },
  fontWeight: 900,
  color: 'primary.main',
  letterSpacing: { xs: '-0.5px', md: '-1.5px' },
  lineHeight: 1.15
};

export const behavioralListWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  fontSize: { xs: '15px', md: '17px' },
  fontWeight: 500,
  color: 'primary.main',
  opacity: 0.85,
  lineHeight: 1.6
};

export const metricsHighlightBoxStyles = {
  flex: '0.8',
  width: '100%',
  minWidth: { xs: '100%', md: '320px' },
  background: gradients.communityFeature,
  borderRadius: '28px',
  padding: { xs: '32px 24px', md: '48px 32px' },
  textAlign: 'center',
  border: '1px dashed rgba(0, 68, 204, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px',
  boxSizing: 'border-box'
};

export const structuralImpactEmojiStyles = {
  fontSize: { xs: '40px', md: '54px' },
  margin: 0
};

export const calloutSubheadingStyles = {
  fontSize: { xs: '22px', md: '28px' },
  fontWeight: 900,
  color: 'primary.main',
  letterSpacing: '-0.5px'
};

export const solutionSummaryParagraphStyles = {
  fontSize: { xs: '14px', md: '16px' },
  fontWeight: 500,
  color: 'primary.main',
  opacity: 0.75,
  lineHeight: 1.5
};