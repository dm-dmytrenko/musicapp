import { sharedStyles } from '../../../theme';

export const outerGridContainerStyles = {
  width: '100%', 
  maxWidth: '1350px', 
  display: 'flex', 
  flexDirection: 'row', 
  gap: '40px', 
  flexWrap: 'wrap', 
  boxSizing: 'border-box',
  alignItems: 'stretch'
};

export const featureCardColumnStyles = {
  flex: 1,
  minWidth: '360px',
  minHeight: '450px',
  borderRadius: '40px',
  padding: '56px',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  justifyContent: 'center',
  ...sharedStyles.glassCardMedium,
};

export const cardHeaderLayoutRowStyles = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '20px'
};

export const geometricIconBoxStyles = {
  fontSize: '36px', 
  width: '68px', 
  height: '68px', 
  ...sharedStyles.iconBadge,
};

export const uniqueTitleHeadingStyles = {
  fontSize: '32px', 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: '-0.8px'
};

export const genericBulletListContainerStyles = {
  fontSize: '18px', 
  ...sharedStyles.bodyText,
  lineHeight: 1.7, 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '16px'
};
