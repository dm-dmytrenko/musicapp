import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  { key: 'Opt_1', labelKey: 'change.options.Opt_1' },
  { key: 'Opt_2', labelKey: 'change.options.Opt_2' },
  { key: 'trackPart', labelKey: 'change.options.trackPart' },
  { key: 'comment', labelKey: 'change.options.comment' },
];

const Change = () => {
  const { t } = useTranslation();
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

  const contentMaxWidth = visibleOptions.length === 1 
    ? '520px' 
    : { xs: '100%', sm: '520px', md: '820px' };

  return (
    <Box sx={s.pageGridContainerStyles}>
      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: visibleOptions.length === 1 
            ? '1fr' 
            : { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: '12px', md: '16px' },
          maxWidth: contentMaxWidth,
          width: '100%',
          margin: '0 auto',
          alignItems: 'stretch'
        }}
      >
        {visibleOptions.map(({ key, labelKey }) => (
          <ConfigToggleRow 
            key={key}
            label={t(labelKey)}
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
              maxWidth: contentMaxWidth,
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
              placeholder={t('change.comment_placeholder')}
              sx={s.commentTextAreaStyles}
            />
          </MotionBox>
        )}
      </AnimatePresence>

      <Box sx={s.actionContainerWrapperStyles}>
        <ActionButton onClick={() => navigate('/download')}>
          {t('change.generate_button')}
        </ActionButton>
      </Box>
    </Box>
  );
};

export default Change;