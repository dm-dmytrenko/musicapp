import React from 'react';
import { Box } from '@mui/system';

const StruggleSection = () => (
  <Box sx={{
    width: '100%',
    maxWidth: '1300px',
    background: 'rgba(255, 255, 255, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '40px',
    padding: '64px',
    boxShadow: '0 40px 80px rgba(0, 70, 120, 0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'row',
    gap: '64px',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    alignItems: 'center'
  }}>
    <Box sx={{ flex: '1.2', minWidth: '340px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ fontSize: '13px', fontWeight: 900, color: '#ff4444', letterSpacing: '2px' }}>THE 24-HOUR STRUGGLE</Box>
      <Box sx={{ fontSize: '42px', fontWeight: 900, color: '#0044cc', letterSpacing: '-1.5px', lineHeight: 1.15 }}>
        Staring at a blank screen kills your momentum.
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '17px', fontWeight: 500, color: '#0044cc', opacity: 0.85, lineHeight: 1.6 }}>
        <Box>👉 <b>Finishing a track feels amazing.</b> But spending the next day stressing over album names and formatting artwork kills your creative high.</Box>
        <Box>👉 <b>It drains your energy</b> right when you should be celebrating your music.</Box>
      </Box>
    </Box>
    
    <Box sx={{ 
      flex: '0.8', 
      minWidth: '320px', 
      background: 'linear-gradient(135deg, rgba(0, 68, 204, 0.06) 0%, rgba(0, 119, 255, 0.02) 100%)', 
      borderRadius: '28px', 
      padding: '48px 32px', 
      textAlign: 'center',
      border: '1px dashed rgba(0, 68, 204, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '16px'
    }}>
      <Box sx={{ fontSize: '54px', margin: 0 }}>⚡</Box>
      <Box sx={{ fontSize: '28px', fontWeight: 900, color: '#0044cc', letterSpacing: '-0.5px' }}>From 24 Hours to 5 Minutes</Box>
      <Box sx={{ fontSize: '16px', fontWeight: 500, color: '#0044cc', opacity: 0.75, lineHeight: 1.5 }}>
        We instantly compress your entire post-production checklist into a distribution-ready asset package.
      </Box>
    </Box>
  </Box>
);

export default StruggleSection;