import React from 'react';
import { Box } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './StatusBar.styles';

const StatusBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const steps = [
    { label: 'ABOUT US', path: '/about' },
    { label: 'UPLOAD TRACK', path: '/upload' },
    { label: 'CHOOSE OPTIONS', path: '/selector' },
    { label: 'DOWNLOAD', path: '/download' }
  ];

  const currentStepIndex = steps.findIndex(step => step.path === currentPath);
  const visibleSteps = currentStepIndex !== -1 ? steps.slice(0, currentStepIndex + 1) : [];

  const canGoBack = currentStepIndex > 0;
  const canGoForward = currentStepIndex !== -1 && currentStepIndex < steps.length - 1;

  const handleBack = () => {
    if (canGoBack) {
      navigate(steps[currentStepIndex - 1].path);
    }
  };

  const handleForward = () => {
    if (canGoForward) {
      navigate(steps[currentStepIndex + 1].path);
    }
  };

  return (
    <Box sx={s.masterStatusBarContainerStyles}>
      
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

      <Box sx={s.stepProgressStackStyles}>
        {visibleSteps.map((step, index) => (
          <React.Fragment key={step.path}>
            <Box 
              onClick={() => navigate(step.path)}
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
  );
};

export default StatusBar;