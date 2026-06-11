// src/components/OptionTile/OptionTile.jsx
import React from 'react';
import { Box } from '@mui/system';

const OptionTile = ({ optionNum, icon, labelLine1, labelLine2 }) => {
  return (
    <Box sx={{
      flex: 1,
      aspectRatio: '1 / 1',
      height: 'auto',
      background: 'rgba(255, 255, 255, 0.4)',
      border: '2px solid rgba(255, 255, 255, 0.7)',
      boxShadow: '0 30px 70px rgba(0, 70, 120, 0.12), inset 0 2px 0 #fff',
      padding: '12px',
      borderRadius: '24px',
      backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      boxSizing: 'border-box',
      '&:hover': {
        transform: 'translateY(-12px)',
        background: 'rgba(255, 255, 255, 0.6)',
        boxShadow: '0 44px 80px rgba(0, 70, 120, 0.2)'
      }
    }}>
      
      <Box sx={{
        background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
        color: '#fff',
        padding: '12px 20px',
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        borderRadius: '16px 16px 4px 4px',
        boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.5)',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.35)',
        flexShrink: 0
      }}>
        <span>{optionNum}</span>
        <Box component="span" sx={{ background: 'rgba(255,255,255,0.3)', border: '2px solid rgba(255,255,255,0.5)', padding: '0 10px', fontSize: '18px', borderRadius: '4px' }}>×</Box>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center', gap: '5%' }}>
        <Box sx={{ fontSize: '7vw', filter: 'drop-shadow(0 12px 20px rgba(0, 40, 100, 0.2))' }}>{icon}</Box>
        <span className="pixel-text" style={{ fontSize: '1.2vw', color: '#0044cc', lineHeight: '1.8', letterSpacing: 0 }}>
          {labelLine1}<br />{labelLine2}
        </span>
      </Box>

    </Box>
  );
};

export default OptionTile;