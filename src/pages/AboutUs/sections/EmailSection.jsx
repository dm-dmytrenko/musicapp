import React from 'react';
import { Box } from '@mui/system';

const EmailSection = () => (
  <Box sx={{
    width: '100%',
    maxWidth: '1300px',
    background: 'rgba(255, 255, 255, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '40px',
    padding: '96px 64px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '56px',
    boxSizing: 'border-box',
    boxShadow: '0 40px 80px rgba(0, 70, 120, 0.03)',
    minHeight: '600px'
  }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Box component="h2" sx={{ fontSize: '56px', fontWeight: 900, color: '#0044cc', letterSpacing: '-2.5px', lineHeight: 1.05, margin: 0 }}>
        Don't miss an opportunity.
      </Box>
      <Box sx={{ fontSize: '24px', fontWeight: 500, color: '#0044cc', opacity: 0.8, maxWidth: '850px', lineHeight: 1.6 }}>
        Follow our email list only if you want to be the first to know when new modules and tools drop. No spam, no marketing trash. Completely optional.
      </Box>
    </Box>

    <Box sx={{ 
      width: '100%', 
      maxWidth: '720px', 
      display: 'flex', 
      background: '#fff', 
      padding: '14px 14px 14px 36px', 
      borderRadius: '32px', 
      border: '2px solid rgba(0, 68, 204, 0.15)', 
      boxSizing: 'border-box', 
      alignItems: 'center', 
      gap: '24px', 
      boxShadow: '0 20px 40px rgba(0, 68, 204, 0.05)' 
    }}>
      <Box 
        component="input" 
        type="email" 
        placeholder="Enter your email address" 
        sx={{ 
          flex: 1, 
          border: 'none', 
          outline: 'none', 
          fontSize: '20px', 
          fontWeight: 600, 
          color: '#0044cc',
          background: 'transparent',
          '&::placeholder': { color: '#0044cc', opacity: 0.35 }
        }} 
      />
      <Box sx={{
        background: '#0044cc',
        color: '#fff',
        fontWeight: 800,
        fontSize: '18px',
        padding: '20px 44px',
        borderRadius: '22px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
        '&:hover': { opacity: 0.9, transform: 'scale(1.02)' },
        '&:active': { transform: 'scale(1)' }
      }}>
        Follow List
      </Box>
    </Box>
  </Box>
);

export default EmailSection;