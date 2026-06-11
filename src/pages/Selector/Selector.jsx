// src/pages/Selector/Selector.jsx
import React from 'react';
import { Box } from '@mui/system'; 
import OptionTile from '../../components/OptionTile/OptionTile.jsx';

const Selector = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5%',
      boxSizing: 'border-box',
      background: 'transparent',
      overflow: 'hidden'
    }}>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative', 
        zIndex: 3 
      }}>
        <OptionTile 
            optionNum="Opt_1" 
            icon="✒️" 
            labelLine1="CREATE" 
            labelLine2="TRACK NAME" 
        />
        <OptionTile 
            optionNum="Opt_2" 
            icon="🎨" 
            labelLine1="CREATE" 
            labelLine2="ALBUM PICTURE" 
        />
        <OptionTile 
            optionNum="Opt_3" 
            icon="🎧" 
            labelLine1="DEFINE" 
            labelLine2="GENRE" 
        />
      </Box>
    </Box>
  );
};

export default Selector;