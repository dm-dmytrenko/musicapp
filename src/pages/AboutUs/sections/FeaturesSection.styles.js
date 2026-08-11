import { sharedStyles } from '../../../theme';

export const outerGridContainerStyles = {
  width: '100%', 
  minWidth: '350px',
  maxWidth: '1350px', 
  display: 'flex', 
  flexDirection: { xs: 'column', md: 'row' }, 
  gap: { xs: '24px', sm: '32px', md: '40px' }, 
  flexWrap: 'wrap', 
  boxSizing: 'border-box',
  alignItems: 'stretch'
};

export const featureCardColumnStyles = {
  flex: 1,
  width: '100%',
  minWidth: { xs: '100%', sm: '320px' },
  minHeight: { xs: 'auto', md: '450px' },
  borderRadius: { xs: '28px', sm: '36px', md: '40px' },
  padding: { xs: '28px 20px', sm: '40px 32px', md: '56px' },
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: '20px', sm: '24px', md: '28px' },
  justifyContent: 'center',
  boxSizing: 'border-box',
  ...sharedStyles.glassCardMedium,
};

export const cardHeaderLayoutRowStyles = {
  display: 'flex', 
  alignItems: 'center', 
  gap: { xs: '14px', sm: '18px', md: '20px' }
};

export const geometricIconBoxStyles = {
  fontSize: { xs: '26px', sm: '32px', md: '36px' }, 
  width: { xs: '52px', sm: '60px', md: '68px' }, 
  height: { xs: '52px', sm: '60px', md: '68px' }, 
  flexShrink: 0,
  ...sharedStyles.iconBadge,
};

export const uniqueTitleHeadingStyles = {
  fontSize: { xs: '22px', sm: '26px', md: '32px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: { xs: '-0.4px', md: '-0.8px' },
  lineHeight: 1.2
};

export const genericBulletListContainerStyles = {
  fontSize: { xs: '15px', sm: '16px', md: '18px' }, 
  ...sharedStyles.bodyText,
  lineHeight: 1.6, 
  display: 'flex', 
  flexDirection: 'column', 
  gap: { xs: '12px', sm: '14px', md: '16px' }
};