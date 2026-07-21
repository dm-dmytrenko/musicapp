import { sharedStyles } from '../../../theme';

export const centeredLayoutRootStyles = {
  maxWidth: '1040px', 
  minWidth: '350px',
  width: '100%', 
  ...sharedStyles.centeredColumn,
  gap: { xs: '16px', sm: '20px', md: '24px' }, 
  textAlign: 'center',
  padding: { xs: '0 16px', sm: '0 24px' },
  boxSizing: 'border-box'
};

export const uppercasePillLabelStyles = { 
  ...sharedStyles.uppercaseLabel,
  fontSize: { xs: '12px', md: '14px' }
};

export const highImpactTitleStyles = {
  fontSize: { xs: '28px', sm: '36px', md: '42px' }, 
  fontWeight: 900, 
  color: 'primary.main', 
  letterSpacing: { xs: '-0.5px', md: '-1.5px' },
  lineHeight: 1.15
};

export const coreExplanationParagraphStyles = {
  fontSize: { xs: '15px', sm: '17px', md: '18px' }, 
  ...sharedStyles.bodyText,
  maxWidth: '750px', 
  lineHeight: 1.6,
  padding: { xs: '0 8px', sm: '0' }
};

export const placeholderCanvasBoxStyles = {
  width: '100%', 
  maxWidth: '700px', 
  height: { xs: '130px', sm: '150px', md: '180px' }, 
  background: 'rgba(255,255,255,0.25)', 
  border: '2px solid rgba(255,255,255,0.5)', 
  borderRadius: { xs: '20px', md: '28px' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: { xs: '12px', sm: '18px', md: '24px' },
  boxShadow: 'inset 0 10px 30px rgba(0,68,204,0.04)',
  padding: '16px',
  boxSizing: 'border-box'
};

export const internalPlaceholderTextStyles = {
  color: 'primary.main', 
  opacity: 0.3, 
  fontWeight: 800, 
  fontSize: { xs: '11px', sm: '13px', md: '15px' }, 
  letterSpacing: { xs: '1px', md: '2px' },
  wordBreak: 'break-word',
  textAlign: 'center'
};