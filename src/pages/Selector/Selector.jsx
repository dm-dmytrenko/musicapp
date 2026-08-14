import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setOptions } from '../../store/optionsSlice';
import OptionTile from '../../components/OptionTile/OptionTile.jsx';
import ActionButton from '../../components/ActionButton/ActionButton';
import * as s from './Selector.styles';

const Selector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
      dispatch(setOptions(selectedOptions));
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
            labelLine1={t('selector.opt1_line1')} 
            labelLine2={t('selector.opt1_line2')} 
            isSelected={selectedOptions.includes("Opt_1")}
            onClick={() => handleTileClick("Opt_1")}
          />
          <OptionTile 
            optionNum="Opt_2" 
            icon="🎨" 
            labelLine1={t('selector.opt2_line1')} 
            labelLine2={t('selector.opt2_line2')} 
            isSelected={selectedOptions.includes("Opt_2")}
            onClick={() => handleTileClick("Opt_2")}
          />
          <OptionTile 
            optionNum="Opt_3" 
            icon="🎧" 
            labelLine1={t('selector.opt3_line1')} 
            labelLine2={t('selector.opt3_line2')} 
            isSelected={selectedOptions.includes("Opt_3")}
            onClick={() => handleTileClick("Opt_3")}
          />
        </Box>

        <ActionButton
          variant="workflow"
          disabled={isButtonDisabled}
          onClick={handleGenerate}
          sx={{
            width: '100%',
            maxWidth: {
              xs: '400px',
              md: '600px',
            },
            padding: '18px',
            fontSize: '18px',
            marginTop: '3vh',
            boxSizing: 'border-box',
          }}
        >
          {t('selector.generate_button')}
        </ActionButton>
      </Box>
    </Box>
  );
};

export default Selector;