import { gradients, sharedStyles } from '../../../../theme';

export const getAlertRowStyles = (variant) => {
  const variantStyles = {
    negative: {
      backgroundColor: 'error.light',
      border: '1px solid',
      borderColor: 'error.main',
    },
    positive: {
      backgroundColor: 'success.light',
      border: '1px solid',
      borderColor: 'success.main',
    },
    community: {
      background: gradients?.communityFeature || 'info.light',
      border: '1px solid',
      borderColor: 'info.main',
    },
  };

  return {
    ...sharedStyles.alertRow,
    ...(variantStyles[variant] || variantStyles.positive),
    border: '1px solid',
    padding: { xs: '16px 20px', sm: '20px 24px' },
    borderRadius: { xs: '16px', sm: '20px' },
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '12px', sm: '16px' },
  };
};

export const baselineIconGraphicStyles = {
  fontSize: { xs: '22px', sm: '26px', md: '28px' },
  flexShrink: 0,
};

export const contentStatementBodyTextStyles = {
  fontSize: { xs: '14px', sm: '16px', md: '18px' },
  fontWeight: 500,
  color: 'primary.main',
  lineHeight: 1.5,
};