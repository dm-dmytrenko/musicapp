import React from 'react';
import { Box } from '@mui/system';

const FeaturesSection = () => (
  <Box sx={{ 
    width: '100%', 
    maxWidth: '1350px', 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '40px', 
    flexWrap: 'wrap', 
    boxSizing: 'border-box',
    alignItems: 'stretch'
  }}>
    
    <Box sx={{
      flex: 1,
      minWidth: '360px',
      minHeight: '450px',
      background: 'rgba(255, 255, 255, 0.3)',
      border: '2px solid rgba(255, 255, 255, 0.6)',
      borderRadius: '40px',
      padding: '56px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      boxSizing: 'border-box',
      boxShadow: '0 25px 50px rgba(0, 70, 120, 0.02)',
      justifyContent: 'center'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Box sx={{ fontSize: '36px', background: 'rgba(0,68,204,0.08)', width: '68px', height: '68px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🗺️</Box>
        <Box sx={{ fontSize: '32px', fontWeight: 900, color: '#0044cc', letterSpacing: '-0.8px' }}>The Genreless Problem</Box>
      </Box>
      <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#0044cc', opacity: 0.8, lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box>• <b>Distributors demand strict categories</b>, but experimental music often defies classification.</Box>
        <Box>• <b>Our solution:</b> We scan your frequency weights to find official commercial tags that slide past distributor review blocks safely.</Box>
      </Box>
    </Box>

    <Box sx={{
      flex: 1,
      minWidth: '360px',
      minHeight: '450px',
      background: 'rgba(255, 255, 255, 0.3)',
      border: '2px solid rgba(255, 255, 255, 0.6)',
      borderRadius: '40px',
      padding: '56px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      boxSizing: 'border-box',
      boxShadow: '0 25px 50px rgba(0, 70, 120, 0.02)',
      justifyContent: 'center'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Box sx={{ fontSize: '36px', background: 'rgba(0,68,204,0.08)', width: '68px', height: '68px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛡️</Box>
        <Box sx={{ fontSize: '32px', fontWeight: 900, color: '#0044cc', letterSpacing: '-0.8px' }}>Anti-AI Workarounds</Box>
      </Box>
      <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#0044cc', opacity: 0.8, lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box>• <b>Streaming stores are cracking down</b> on raw, unedited AI art and metadata formats.</Box>
        <Box>• <b>Our solution:</b> We pass all graphics through a multi-layer styling system so your final assets look clean and fully compliant.</Box>
      </Box>
    </Box>
    
  </Box>
);

export default FeaturesSection;