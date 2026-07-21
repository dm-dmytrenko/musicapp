import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

const ConfigToggleRow = ({ label, checked, onToggle }) => (
  <Box sx={s.controlRowGlassPanelStyles}>
    <Box sx={s.configurationFieldLabelStyles}>{label}</Box>
    <TactileIosSwitch checked={checked} onClick={onToggle} />
  </Box>
);

const TOGGLE_OPTIONS = [
  { key: 'Opt_1', label: 'Change name' },
  { key: 'Opt_2', label: 'Change song cover' },
  { key: 'trackPart', label: 'Use other part of the track' },
  { key: 'comment', label: 'Add comment to improve results' },
];

const Change = () => {
  const [switches, setSwitches] = useState({
    Opt_1: false,
    Opt_2: false,
    trackPart: false,
    comment: false
  });

  const navigate = useNavigate();
  const chosenOptions = useSelector((state) => state.options.selectedOptions);
  
  const toggleSwitch = (key) => {
    setSwitches((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const visibleOptions = [
    ...TOGGLE_OPTIONS.slice(0, 2).filter(({ key }) => chosenOptions.includes(key)),
    ...TOGGLE_OPTIONS.slice(2)
  ];

  return (
    <Box sx={s.pageGridContainerStyles}>
      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: visibleOptions.length === 1 ? '1fr' : '1fr 1fr',
          gap: '16px',
          width: '100%',
          maxWidth: '820px',
          margin: '0 auto',
          alignItems: 'stretch'
        }}
      >
        {visibleOptions.map(({ key, label }) => (
          <ConfigToggleRow 
            key={key}
            label={label}
            checked={switches[key]}
            onToggle={() => toggleSwitch(key)}
          />
        ))}
      </Box>

      <AnimatePresence initial={false}>
        {switches.comment && (
          <MotionBox
            sx={{
              ...s.commentsWrapperAnimatedContainerStyles,
              maxWidth: '680px',
              width: '100%',
              margin: '0 auto'
            }}
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
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

      <Box sx={s.actionContainerWrapperStyles}>
        <ActionButton onClick={() => navigate('/download')}>
          Generate
        </ActionButton>
      </Box>
    </Box>
  );
};

export default Change;