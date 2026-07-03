import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import ActionButton from '../../components/ActionButton/ActionButton';
import * as s from './Change.styles';

const MotionBox = motion(Box);

const TactileIosSwitch = ({ checked, onClick }) => {
  return (
    <MotionBox
      sx={s.switchTrackFrameStyles}
      onClick={onClick}
      animate={{
        background: checked
          ? 'linear-gradient(to bottom, #2cd965 0%, #4cd964 20%, #2edb59 80%, #1fd64b 100%)'
          : 'linear-gradient(to bottom, #e1e1e1 0%, #efefef 30%, #f7f7f7 70%, #e5e5e5 100%)',
        border: checked ? '1px solid #1ebc42' : '1px solid #ccc',
      }}
      transition={{ duration: 0.25 }}
    >
      <Box sx={s.switchGlossyOverlayStyles} />
      <MotionBox
        sx={s.switchHandleThumbStyles}
        animate={{
          x: checked ? 43 : 3
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      />
    </MotionBox>
  );
};

const Change = () => {
  const [switches, setSwitches] = useState({
    name: false,
    cover: false,
    trackPart: false,
    comment: false
  });

  const navigate = useNavigate();

  const toggleSwitch = (key) => {
    setSwitches((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Box sx={s.pageGridContainerStyles}>
      <Box sx={s.columnsFlexLayoutStyles}>
        
        <Box sx={s.verticalCardStackStyles}>
          <Box sx={s.controlRowGlassPanelStyles}>
            <Box sx={s.configurationFieldLabelStyles}>Change name</Box>
            <TactileIosSwitch 
              checked={switches.name} 
              onClick={() => toggleSwitch('name')} 
            />
          </Box>

          <Box sx={s.controlRowGlassPanelStyles}>
            <Box sx={s.configurationFieldLabelStyles}>Change song cover</Box>
            <TactileIosSwitch 
              checked={switches.cover} 
              onClick={() => toggleSwitch('cover')} 
            />
          </Box>
        </Box>

        <Box sx={s.verticalCardStackStyles}>
          <Box sx={s.controlRowGlassPanelStyles}>
            <Box sx={s.configurationFieldLabelStyles}>Use other part of the track</Box>
            <TactileIosSwitch 
              checked={switches.trackPart} 
              onClick={() => toggleSwitch('trackPart')} 
            />
          </Box>

          <Box sx={s.controlRowGlassPanelStyles}>
            <Box sx={s.configurationFieldLabelStyles}>Add comment to improve results</Box>
            <TactileIosSwitch 
              checked={switches.comment} 
              onClick={() => toggleSwitch('comment')} 
            />
          </Box>

          <AnimatePresence initial={false}>
            {switches.comment && (
              <MotionBox
                sx={s.commentsWrapperAnimatedContainerStyles}
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <Box 
                  component="textarea" 
                  placeholder="Describe adjustments here (e.g. make the titles darker, choose futuristic visuals)..."
                  sx={s.commentTextAreaStyles}
                />
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>

      </Box>

      <Box sx={s.actionContainerWrapperStyles}>
        <ActionButton text="Generate" onClick={() => navigate('/download')}/>
      </Box>
    </Box>
  );
};

export default Change;