import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import OptionTile from '../../components/OptionTile/OptionTile.jsx';
import ActionButton from '../../components/ActionButton/ActionButton';
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
      console.log("-------------");
      console.log(selectedOptions, "Sending options from Selector page to Download page");
      navigate('/download', { state: { chosenOptions: selectedOptions } });
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

        <ActionButton
          variant="workflow"
          disabled={isButtonDisabled}
          onClick={handleGenerate}
          sx={{
            width: '35%',
            maxWidth: '340px',
            padding: '18px',
            fontSize: '18px',
            marginTop: '4vh',
          }}
        >
          Generate
        </ActionButton>
      </Box>
    </Box>
  );
};

export default Selector;
