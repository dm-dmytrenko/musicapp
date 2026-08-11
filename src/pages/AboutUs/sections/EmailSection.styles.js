import { sharedStyles } from '../../../theme';

export const sectionContainerStyles = {
  width: '100%',
  minWidth: '350px',
  maxWidth: '1300px',
  padding: { xs: '36px 16px', sm: '64px 32px', md: '96px 64px' },
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: { xs: '28px', sm: '44px', md: '56px' },
  minHeight: { xs: 'auto', md: '600px' },
  borderRadius: { xs: '28px', sm: '36px', md: '40px' },
  boxSizing: 'border-box',
  ...sharedStyles.glassCard,
};

export const typographyStackStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: { xs: '12px', sm: '18px', md: '24px' },
  alignItems: 'center'
};

export const mainHeadingStyles = {
  fontSize: { xs: '26px', sm: '42px', md: '56px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: { xs: '-0.8px', md: '-2.5px' }, 
  lineHeight: 1.1, 
  margin: 0
};

export const subcaptionTextStyles = {
  fontSize: { xs: '14px', sm: '19px', md: '24px' }, 
  ...sharedStyles.bodyText,
  maxWidth: '850px', 
  lineHeight: 1.5,
  padding: { xs: '0 4px', sm: '0' }
};

export const inputFormWrapperStyles = {
  width: '100%', 
  maxWidth: '720px', 
  display: 'flex', 
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center', 
  gap: { xs: '16px', sm: '12px' },
  background: { xs: 'transparent', sm: '#fff' },
  padding: { xs: '0', sm: '8px 8px 8px 24px' },
  borderRadius: { xs: '0', sm: '50px' },
  border: { xs: 'none', sm: '2px solid rgba(0, 68, 204, 0.15)' },
  boxShadow: { xs: 'none', sm: '0 20px 40px rgba(0, 68, 204, 0.05)' },
  boxSizing: 'border-box'
};

export const nativeInputStyles = {
  flex: 1, 
  width: '100%',
  border: 'none', 
  outline: 'none', 
  fontSize: { xs: '16px', sm: '18px', md: '20px' }, 
  fontWeight: 600, 
  color: 'primary.main',
  boxSizing: 'border-box',
  textAlign: { xs: 'center', sm: 'left' },
  background: { xs: '#fff', sm: 'transparent' },
  padding: { xs: '16px 20px', sm: '8px 0' },
  borderRadius: { xs: '24px', sm: '0' },
  border: { xs: '2px solid rgba(0, 68, 204, 0.15)', sm: 'none' },
  boxShadow: { xs: '0 10px 25px rgba(0, 68, 204, 0.05)', sm: 'none' },

  '&::placeholder': { 
    color: 'primary.main', 
    opacity: 0.5,
    fontSize: { xs: '15px', sm: '18px' }
  }
};

export const actionButtonOverrideStyles = {
  width: { xs: '100%', sm: 'auto' },
  minWidth: { sm: '160px' },
  fontSize: { xs: '16px', sm: '18px' },
  fontWeight: 800,
  padding: { xs: '16px 24px', sm: '16px 36px' },
  borderRadius: { xs: '24px', sm: '40px' },
  whiteSpace: 'nowrap'
};