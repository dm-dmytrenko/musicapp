import React from 'react';
import { Box } from '@mui/system';

const VibeSection = () => (
  <Box sx={{ maxWidth: '1100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
    <Box sx={{ fontSize: '13px', fontWeight: 900, color: '#0044cc', letterSpacing: '2px' }}>HOW IT WORKS</Box>
    <Box sx={{ fontSize: '42px', fontWeight: 900, color: '#0044cc', letterSpacing: '-1.5px' }}>
      Give us 15 seconds. We map the vibe.
    </Box>
    <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#0044cc', opacity: 0.8, maxWidth: '750px', lineHeight: 1.6 }}>
      Upload a brief snippet of your track. Our app analyzes frequencies, rhythms, and tempos to generate concept art and text titles that perfectly match the soul of your sound.
    </Box>
    
    <Box sx={{ 
      width: '100%', 
      maxWidth: '700px', 
      height: '180px', 
      background: 'rgba(255,255,255,0.25)', 
      border: '2px solid rgba(255,255,255,0.5)', 
      borderRadius: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '24px',
      boxShadow: 'inset 0 10px 30px rgba(0,68,204,0.04)'
    }}>
      <Box sx={{ color: '#0044cc', opacity: 0.3, fontWeight: 800, fontSize: '15px', letterSpacing: '2px' }}>
        ─── ■ ■ ■ AUDIO WAVEFORM VISUALIZER PLACEHOLDER ■ ■ ■ ───
      </Box>
    </Box>
  </Box>
);

export default VibeSection;