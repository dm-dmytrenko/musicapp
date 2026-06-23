import React, { useState } from 'react';
import { Box } from '@mui/system'; 
import { useNavigate } from 'react-router-dom';
import OptionTile from '../../components/OptionTile/OptionTile.jsx';

const Selector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleTileClick = (optionId) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleGenerate = () => {
    if (selectedOptions.length > 0) {
      navigate('/download');
    }
  };

  return (
    <Box sx={{
      width: '100vw',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2vh 5%',
      boxSizing: 'border-box',
      background: 'transparent',
      overflow: 'hidden'
    }}>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1400px',
        height: '100%',
        position: 'relative', 
        zIndex: 3 
      }}>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '3.5%',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          transform: 'translateY(-2vh)'
        }}>
          <OptionTile 
            optionNum="Opt_1" 
            icon="✒️" 
            labelLine1="CREATE" 
            labelLine2="TRACK NAME" 
            isSelected={selectedOptions.includes("Opt_1")}
            onClick={() => handleTileClick("Opt_1")}
          />
          <OptionTile 
            optionNum="Opt_2" 
            icon="🎨" 
            labelLine1="CREATE" 
            labelLine2="ALBUM PICTURE" 
            isSelected={selectedOptions.includes("Opt_2")}
            onClick={() => handleTileClick("Opt_2")}
          />
          <OptionTile 
            optionNum="Opt_3" 
            icon="🎧" 
            labelLine1="DEFINE" 
            labelLine2="GENRE" 
            isSelected={selectedOptions.includes("Opt_3")}
            onClick={() => handleTileClick("Opt_3")}
          />
        </Box>

        <Box 
          onClick={handleGenerate}
          sx={{
            width: '35%',
            maxWidth: '340px',
            background: selectedOptions.length === 0 
              ? 'linear-gradient(to bottom, #d5f3ff 0%, #b3d7ff 100%)'
              : 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
            border: selectedOptions.length === 0 ? '1px solid #b3d7ff' : '1px solid #0044cc',
            borderRadius: '20px',
            padding: '18px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: selectedOptions.length === 0 ? 'rgba(0, 68, 204, 0.4)' : '#fff',
            cursor: selectedOptions.length === 0 ? 'default' : 'pointer',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: selectedOptions.length === 0 ? 'none' : '0 15px 30px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
            textShadow: selectedOptions.length === 0 ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
            transition: 'all 0.2s',
            pointerEvents: selectedOptions.length === 0 ? 'none' : 'auto',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            marginTop: '4vh',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 20px 40px rgba(0,85,221,0.35)',
            },
            '&:active': {
              transform: 'translateY(0px)'
            }
          }}
        >
          {selectedOptions.length > 0 && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />}
          Generate
        </Box>

      </Box>
    </Box>
  );
};

export default Selector;