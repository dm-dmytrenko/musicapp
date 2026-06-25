import React, { useState } from 'react';
import { Box } from '@mui/system'; 
import { useNavigate } from 'react-router-dom';
import OptionTile from '../../components/OptionTile/OptionTile.jsx';
import * as s from './Selector.styles';

const Selector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const isButtonDisabled = selectedOptions.length === 0;

  const handleTileClick = (optionId) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleGenerate = () => {
    if (!isButtonDisabled) {
      navigate('/download');
    }
  };

  return (
    <Box sx={s.viewportWrapperStyles}>
      <Box sx={s.mainContentContainerStyles}>
        
        <Box sx={s.optionsRowGridStyles}>
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
            ...s.generateButtonBaseStyles,
            background: isButtonDisabled 
              ? 'linear-gradient(to bottom, #d5f3ff 0%, #b3d7ff 100%)'
              : 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
            border: '1px solid',
            borderColor: isButtonDisabled ? '#b3d7ff' : 'primary.main',
            color: isButtonDisabled ? 'rgba(0, 68, 204, 0.4)' : 'primary.contrastText',
            cursor: isButtonDisabled ? 'default' : 'pointer',
            pointerEvents: isButtonDisabled ? 'none' : 'auto',
            boxShadow: isButtonDisabled ? 'none' : '0 15px 30px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
            textShadow: isButtonDisabled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
            '&:hover': {
              transform: isButtonDisabled ? 'none' : 'translateY(-2px)',
              boxShadow: isButtonDisabled ? 'none' : '0 20px 40px rgba(0,85,221,0.35)',
            }
          }}
        >
          {!isButtonDisabled && <Box sx={s.buttonGlossReflectStyles} />}
          Generate
        </Box>

      </Box>
    </Box>
  );
};

export default Selector;