import React from 'react';
import { Box } from '@mui/system';
import * as s from './ActionButton.styles';

const VARIANT_STYLES = {
  default: s.buttonElementStyles,
  workflow: s.workflowButtonBaseStyles,
  primary: s.primaryButtonStyles,
};

const ActionButton = ({
  children,
  text,
  onClick,
  disabled = false,
  caption,
  variant = 'default',
  sx,
  ...rest
}) => {
  const label = children ?? text;

  const glossStyles = variant === 'default'
    ? s.linearGlossHighlightStyles
    : s.glossReflectStyles;

  const button = (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      sx={[
        VARIANT_STYLES[variant],
        variant === 'workflow' && !disabled && s.workflowEnabledButtonStyles,
        disabled && s.disabledButtonStyles,
        sx,
      ]}
      {...rest}
    >
      {!disabled && <Box sx={glossStyles} />}
      <Box component="span" sx={s.internalTextWrapperStyles}>
        {label}
      </Box>
    </Box>
  );

  if (!caption) {
    return button;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {button}
      <Box sx={s.captionStyles}>{caption}</Box>
    </Box>
  );
};

export default ActionButton;
