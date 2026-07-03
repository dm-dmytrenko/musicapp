import { sharedStyles } from '../../../theme';

export const centeredLayoutRootStyles = {
  maxWidth: '1100px', 
  width: '100%', 
  textAlign: 'center', 
  ...sharedStyles.centeredColumn,
  gap: '32px', 
  pt: '4vh'
};

export const floatingPillBadgeStyles = {
  fontSize: '14px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '3px', 
  background: 'primary.light', 
  padding: '8px 20px', 
  borderRadius: '50px'
};

export const masterPageHeadlineStyles = {
  fontSize: '64px', 
  fontWeight: 900, 
  color: 'primary.main', 
  margin: 0, 
  lineHeight: 1.05, 
  letterSpacing: '-2.5px'
};

export const productSubtextDescriptionStyles = {
  fontSize: '22px', 
  ...sharedStyles.bodyText,
  maxWidth: '750px', 
  lineHeight: 1.5
};

export const ctaButtonWrapperStyles = {
  mt: '12px'
};
