import React from 'react';
import { Box } from '@mui/system';
import ActionButton from '../components/ActionButton';

const HeroSection = () => (
  <Box sx={{ maxWidth: '1100px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', pt: '4vh' }}>
    <Box sx={{ fontSize: '14px', fontWeight: 900, color: '#0044cc', letterSpacing: '3px', background: 'rgba(0, 68, 204, 0.08)', padding: '8px 20px', borderRadius: '50px' }}>
      INTRODUCING TroisD
    </Box>
    <Box component="h1" sx={{ fontSize: '64px', fontWeight: 900, color: '#0044cc', margin: 0, lineHeight: 1.05, letterSpacing: '-2.5px' }}>
      Give your music to the world.<br />Without the overhead.
    </Box>
    <Box sx={{ fontSize: '22px', fontWeight: 500, color: '#0044cc', opacity: 0.8, maxWidth: '750px', lineHeight: 1.5 }}>
      We are an independent team building straightforward, automated release tools for bedroom producers and indie artists.
    </Box>
    <Box sx={{ mt: '12px' }}>
      <ActionButton />
    </Box>
  </Box>
);

export default HeroSection;