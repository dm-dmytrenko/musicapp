import { sharedStyles } from '../../../theme';

export const centralLayoutColumnStyles = {
  maxWidth: '1100px', 
  minWidth: '350px',
  width: '100%', 
  ...sharedStyles.centeredColumn,
  gap: { xs: '20px', sm: '26px', md: '32px' },
  padding: { xs: '0 16px', sm: '0 24px' },
  boxSizing: 'border-box'
};

export const alignmentHeaderStackStyles = {
  textAlign: 'center', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '8px'
};

export const smallCategoryLabelStyles = { 
  ...sharedStyles.uppercaseLabel,
  fontSize: { xs: '12px', md: '14px' }
};

export const genericTitleHeaderStyles = {
  fontSize: { xs: '26px', sm: '32px', md: '38px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: { xs: '-0.5px', md: '-1.5px' },
  lineHeight: 1.15
};

export const timelineCardContainerStyles = {
  width: '100%',
  minWidth: '350px',
  borderRadius: { xs: '24px', sm: '28px', md: '32px' },
  padding: { xs: '20px 16px', sm: '32px', md: '40px' },
  display: 'flex',
  alignItems: 'center',
  gap: { xs: '12px', sm: '20px', md: '28px' },
  flexWrap: 'nowrap',
  boxSizing: 'border-box',
  ...sharedStyles.glassCardMedium,
  margin: { xs: '0px 0', sm: '-5px 0', md: '-5px 0' }
};

export const standaloneIconAvatarStyles = {
  fontSize: { xs: '28px', sm: '32px', md: '36px' }, 
  background: '#fff', 
  width: { xs: '52px', sm: '64px', md: '72px' }, 
  height: { xs: '52px', sm: '64px', md: '72px' }, 
  borderRadius: { xs: '16px', md: '20px' }, 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  boxShadow: '0 10px 20px rgba(0,0,0,0.02)',
  flexShrink: 0 // Ensures icon never collapses or shrinks to 0px
};

export const projectMetaStackStyles = {
  flex: 1, 
  minWidth: 0, // Allows text container to shrink gracefully alongside the icon
  display: 'flex', 
  flexDirection: 'column', 
  gap: '6px'
};

export const technicalSubheadingStyles = {
  fontSize: { xs: '18px', sm: '20px', md: '22px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-0.3px',
  lineHeight: 1.2
};

export const technicalParagraphTextStyles = {
  fontSize: { xs: '13px', sm: '14px', md: '15px' }, 
  ...sharedStyles.bodyText,
  lineHeight: 1.5
};