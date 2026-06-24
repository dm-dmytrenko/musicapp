import React from 'react';
import { Box } from '@mui/system';

const FuturePlansSection = () => (
  <Box sx={{ maxWidth: '1100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box sx={{ fontSize: '13px', fontWeight: 900, color: '#0044cc', letterSpacing: '2px' }}>ROADMAP</Box>
      <Box sx={{ fontSize: '38px', fontWeight: 900, color: '#0044cc', letterSpacing: '-1.5px' }}>
        What we are building next
      </Box>
    </Box>

    <Box sx={{
      width: '100%',
      background: 'rgba(255,255,255,0.3)',
      border: '2px solid rgba(255,255,255,0.6)',
      borderRadius: '32px',
      padding: '40px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      flexWrap: 'wrap'
    }}>
      <Box sx={{ fontSize: '36px', background: '#fff', width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>📈</Box>
      <Box sx={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Box sx={{ fontSize: '22px', fontWeight: 900, color: '#0044cc', letterSpacing: '-0.3px' }}>Vibe-Driven Smart Promotion Engine</Box>
        <Box sx={{ fontSize: '15px', fontWeight: 500, color: '#0044cc', opacity: 0.8, lineHeight: 1.5 }}>
          We are developing a tool to automatically scan your track's specific sound waves and match it to curated music niches, custom target playlists, and aesthetic visual content styles to make promotion easier.
        </Box>
      </Box>
    </Box>
  </Box>
);

export default FuturePlansSection;