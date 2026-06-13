import React from 'react';
import { Box } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';

const StatusBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const steps = [
    { label: 'ABOUT US', path: '/about' },
    { label: 'UPLOAD TRACK', path: '/upload' },
    { label: 'CHOOSE OPTIONS', path: '/selector' },
    { label: 'PREVIEW', path: '/preview' },
    { label: 'DOWNLOAD', path: '/download' }
  ];

  const currentStepIndex = steps.findIndex(step => step.path === currentPath);
  const visibleSteps = currentStepIndex !== -1 ? steps.slice(0, currentStepIndex + 1) : [];

  const handleBack = () => {
    if (currentStepIndex > 0) {
      navigate(steps[currentStepIndex - 1].path);
    }
  };

  const handleForward = () => {
    if (currentStepIndex !== -1 && currentStepIndex < steps.length - 1) {
      navigate(steps[currentStepIndex + 1].path);
    }
  };

  const getStepStyle = (stepPath) => {
    const isActive = currentPath === stepPath;
    
    if (isActive) {
      return {
        background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
        color: '#ffffff',
        border: '1px solid #0044cc',
        boxShadow: '0 12px 24px rgba(0, 85, 221, 0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        borderRadius: '12px'
      };
    }
    
    return {
      background: 'transparent',
      color: '#0044cc',
      border: '1px solid transparent',
      boxShadow: 'none',
      borderRadius: '0px'
    };
  };

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '24px 5%',
      gap: '32px',
      borderBottom: '2px solid rgba(0, 68, 204, 0.15)',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif"
    }}>
      
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Box 
          onClick={handleBack}
          sx={{
            width: '40px',
            height: '40px',
            border: '2px solid #0044cc',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0044cc',
            cursor: currentStepIndex > 0 ? 'pointer' : 'not-allowed',
            opacity: currentStepIndex > 0 ? 1 : 0.4,
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s',
            boxShadow: '0 4px 10px rgba(0, 68, 204, 0.05)',
            '&:hover': currentStepIndex > 0 ? { 
              background: 'rgba(0, 68, 204, 0.05)',
              transform: 'translateY(-1px)'
            } : {},
            '&:active': currentStepIndex > 0 ? { transform: 'translateY(0px)' } : {}
          }}
        >
          ◀
        </Box>
        <Box 
          onClick={handleForward}
          sx={{
            width: '40px',
            height: '40px',
            border: '2px solid #0044cc',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0044cc',
            cursor: (currentStepIndex !== -1 && currentStepIndex < steps.length - 1) ? 'pointer' : 'not-allowed',
            opacity: (currentStepIndex !== -1 && currentStepIndex < steps.length - 1) ? 1 : 0.4,
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s',
            boxShadow: '0 4px 10px rgba(0, 68, 204, 0.05)',
            '&:hover': (currentStepIndex !== -1 && currentStepIndex < steps.length - 1) ? { 
              background: 'rgba(0, 68, 204, 0.05)',
              transform: 'translateY(-1px)'
            } : {},
            '&:active': (currentStepIndex !== -1 && currentStepIndex < steps.length - 1) ? { transform: 'translateY(0px)' } : {}
          }}
        >
          ▶
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {visibleSteps.map((step, index) => (
          <React.Fragment key={step.path}>
            <Box 
              onClick={() => navigate(step.path)}
              sx={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                ...getStepStyle(step.path),
                '&:hover': currentPath !== step.path ? {
                  color: '#0077ff'
                } : {}
              }}
            >
              {currentPath === step.path && (
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)', zIndex: 1 }} />
              )}
              <Box component="span" sx={{ position: 'relative', zIndex: 2 }}>
                {step.label}
              </Box>
            </Box>
            
            {index < visibleSteps.length - 1 && (
              <Box sx={{ color: '#0077ff', fontWeight: 900, fontSize: '16px', opacity: 0.5 }}>
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