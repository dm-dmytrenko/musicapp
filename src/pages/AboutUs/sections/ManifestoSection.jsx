import React from 'react';
import { Box } from '@mui/system';

const ManifestoSection = () => (
  <Box sx={{
    width: '100%',
    maxWidth: '1300px',
    background: 'rgba(255, 255, 255, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '40px',
    padding: '64px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    boxShadow: '0 40px 80px rgba(0, 70, 120, 0.03)'
  }}>
    
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Box sx={{ fontSize: '13px', fontWeight: 900, color: '#0044cc', letterSpacing: '2px' }}>OUR NO-SCAM POLICY</Box>
      <Box sx={{ fontSize: '46px', fontWeight: 900, color: '#0044cc', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
        No accounts. No forcing. Just focus on the music.
      </Box>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      
      <Box sx={{ 
        width: '100%', 
        background: 'rgba(255, 68, 68, 0.06)', 
        border: '1px solid rgba(255, 68, 68, 0.15)', 
        borderRadius: '24px', 
        padding: '28px 36px', 
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <Box sx={{ fontSize: '28px' }}>❌</Box>
        <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#0044cc', lineHeight: 1.5 }}>
          <b>We hate subscription traps</b> and data-harvesting setups just as much as you do.
        </Box>
      </Box>

      <Box sx={{ 
        width: '100%', 
        background: 'rgba(0, 204, 136, 0.06)', 
        border: '1px solid rgba(0, 204, 136, 0.15)', 
        borderRadius: '24px', 
        padding: '28px 36px', 
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <Box sx={{ fontSize: '28px' }}>✅</Box>
        <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#0044cc', lineHeight: 1.5 }}>
          <b>Zero mandatory registrations.</b> You don't need a profile, password, or credit card to fully process your music layout results here.
        </Box>
      </Box>

      <Box sx={{ 
        width: '100%', 
        background: 'linear-gradient(135deg, rgba(0, 68, 204, 0.06) 0%, rgba(0, 119, 255, 0.02) 100%)', 
        border: '1px dashed rgba(0, 68, 204, 0.25)', 
        borderRadius: '24px', 
        padding: '28px 36px', 
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <Box sx={{ fontSize: '28px' }}>🔒</Box>
        <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#0044cc', lineHeight: 1.5 }}>
          <b>100% Free Baseline Tools.</b> Everything we have right now—and our core asset pipelines down the line—will remain free forever. Everything is optimized for the community.
        </Box>
      </Box>

    </Box>
  </Box>
);

export default ManifestoSection;