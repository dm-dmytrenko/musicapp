import React from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ActionButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <Box 
        onClick={() => navigate('/upload')}
        sx={{
          background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
          border: '1px solid #0044cc',
          borderRadius: '24px',
          padding: '16px 48px',
          fontSize: '18px',
          fontWeight: 800,
          color: '#fff',
          cursor: 'pointer',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,85,221,0.25), inset 0 1px 1px rgba(255,255,255,0.5)',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 25px 50px rgba(0,85,221,0.4)'
          },
          '&:active': { transform: 'translateY(0px)' }
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
        Try it Free
      </Box>
      <Box sx={{ fontSize: '13px', fontWeight: 700, color: '#0044cc', opacity: 0.6, letterSpacing: '0.5px' }}>
        It is free. Forever.
      </Box>
    </Box>
  );
};

export default ActionButton;