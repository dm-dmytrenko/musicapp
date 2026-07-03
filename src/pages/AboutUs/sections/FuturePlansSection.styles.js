import { sharedStyles } from '../../../theme';

export const centralLayoutColumnStyles = {
  maxWidth: '1100px', 
  width: '100%', 
  ...sharedStyles.centeredColumn,
  gap: '32px'
};

export const alignmentHeaderStackStyles = {
  textAlign: 'center', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '8px'
};

export const smallCategoryLabelStyles = { ...sharedStyles.uppercaseLabel };

export const genericTitleHeaderStyles = {
  fontSize: '38px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-1.5px'
};

export const timelineCardContainerStyles = {
  width: '100%',
  borderRadius: '32px',
  padding: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  flexWrap: 'wrap',
  ...sharedStyles.glassCardMedium,
};

export const standaloneIconAvatarStyles = {
  fontSize: '36px', 
  background: '#fff', 
  width: '72px', 
  height: '72px', 
  borderRadius: '20px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
};

export const projectMetaStackStyles = {
  flex: 1, 
  minWidth: '280px', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '6px'
};

export const technicalSubheadingStyles = {
  fontSize: '22px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-0.3px'
};

export const technicalParagraphTextStyles = {
  fontSize: '15px', 
  ...sharedStyles.bodyText,
  lineHeight: 1.5
};
