import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './StatusBar.styles';

const StatusBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const steps = [
    { label: 'ABOUT US', path: '/about' },
    { label: 'UPLOAD TRACK', path: '/upload' },
    { label: 'CHOOSE OPTIONS', path: '/selector' },
    { label: 'DOWNLOAD', path: '/download' },
    { label: 'CHANGE', path: '/change' }
  ];

  const currentStepIndex = steps.findIndex(step => step.path === currentPath);
  const visibleSteps = currentStepIndex !== -1 ? steps.slice(0, currentStepIndex + 1) : [];

  const canGoBack = currentStepIndex > 0;
  const canGoForward = currentStepIndex !== -1 && currentStepIndex < steps.length - 1;

  const handleBack = () => {
    if (canGoBack) {
      navigate(steps[currentStepIndex - 1].path);
      setMenuOpen(false);
    }
  };

  const handleForward = () => {
    if (canGoForward) {
      navigate(steps[currentStepIndex + 1].path);
      setMenuOpen(false);
    }
  };

  const handleStepClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <Box sx={s.masterStatusBarContainerStyles}>
      
      <Box sx={s.leftContentGroupStyles}>
        <Box sx={s.navigationControlsStackStyles}>
          <Box 
            onClick={handleBack}
            sx={s.backNavigationButtonStyles(canGoBack)}
          >
            ◀
          </Box>
          <Box 
            onClick={handleForward}
            sx={s.forwardNavigationButtonStyles(canGoForward)}
          >
            ▶
          </Box>
        </Box>

        <Box sx={s.desktopStepProgressStackStyles}>
          {visibleSteps.map((step, index) => (
            <React.Fragment key={step.path}>
              <Box 
                onClick={() => handleStepClick(step.path)}
                sx={s.baseStepItemStyles(currentPath, step.path)}
              >
                {currentPath === step.path && (
                  <Box sx={s.stepGlassReflectionStyles} />
                )}
                <Box component="span" sx={s.stepTextLabelStyles}>
                  {step.label}
                </Box>
              </Box>
              
              {index < visibleSteps.length - 1 && (
                <Box sx={s.arrowSpacerSeparatorStyles}>
                  ➔
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      <Box 
        onClick={() => setMenuOpen(!menuOpen)}
        sx={s.burgerToggleButtonStyles}
      >
        <Box sx={s.burgerTextIconStyles}>
          {menuOpen ? '✕' : '☰'}
        </Box>
      </Box>

      {menuOpen && (
        <Box sx={s.mobileMenuDropdownStyles}>
          {steps.map((step) => {
            const isVisible = visibleSteps.some(v => v.path === step.path);
            if (!isVisible) return null;

            return (
              <Box 
                key={step.path}
                onClick={() => handleStepClick(step.path)}
                sx={s.mobileStepItemStyles(currentPath, step.path)}
              >
                <Box component="span" sx={s.stepTextLabelStyles}>
                  {step.label}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

    </Box>
  );
};

export default StatusBar;