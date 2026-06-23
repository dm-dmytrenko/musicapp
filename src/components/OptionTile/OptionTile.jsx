import React from 'react';
import { Box } from '@mui/system';

const OptionTile = ({ optionNum, icon, labelLine1, labelLine2, isSelected, onClick }) => {
  return (
    <Box 
      onClick={onClick}
      sx={{
        flex: 1,
        maxWidth: '420px',
        aspectRatio: '1 / 1',
        height: 'auto',
        background: isSelected ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.4)',
        border: isSelected ? '3px solid #0077ff' : '2px solid rgba(255, 255, 255, 0.7)',
        boxShadow: isSelected ? '0 50px 90px rgba(0, 119, 255, 0.25), inset 0 2px 0 #fff' : '0 35px 80px rgba(0, 70, 120, 0.12), inset 0 2px 0 #fff',
        padding: '20px',
        borderRadius: '32px',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        boxSizing: 'border-box',
        transform: isSelected ? 'translateY(-16px) scale(1.02)' : 'translateY(0)',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        '&:hover': {
          transform: isSelected ? 'translateY(-18px) scale(1.02)' : 'translateY(-12px)',
          background: isSelected ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)',
          boxShadow: isSelected ? '0 60px 100px rgba(0, 119, 255, 0.35)' : '0 50px 90px rgba(0, 70, 120, 0.2)'
        }
      }}
    >
      
      <Box sx={{
        background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
        color: '#fff',
        padding: '16px 28px',
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        borderRadius: '22px 22px 4px 4px',
        boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.5)',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.35)',
        flexShrink: 0
      }}>
        <span>{optionNum}</span>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '28px', textAlign: 'center', gap: '8%' }}>
        <Box sx={{ fontSize: '110px', filter: 'drop-shadow(0 16px 28px rgba(0, 40, 100, 0.25))' }}>{icon}</Box>
        <span className="pixel-text" style={{ fontSize: '22px', color: '#0044cc', fontWeight: 700, lineHeight: '1.6', letterSpacing: 0 }}>
          {labelLine1}<br />{labelLine2}
        </span>
      </Box>

    </Box>
  );
};

export default OptionTile;