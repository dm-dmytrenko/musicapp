import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

import * as s from './Download.styles';

const InfoDisplayRow = ({ label, value, onClick }) => (
  <Box onClick={onClick} sx={s.infoRowStyles}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Box sx={s.infoRowLabelStyles}>{label}</Box>
      <Box sx={s.infoRowValueStyles}>{value}</Box>
    </Box>
    
    <Box sx={s.iconWrapperStyles}>
      <Box sx={{ ...s.iconBaseStyles, background: 'background.card', bottom: '2px', left: '2px', zIndex: 1 }} />
      <Box sx={{ ...s.iconBaseStyles, background: 'background.glassBorder', top: '2px', right: '2px', zIndex: 2 }} />
    </Box>
  </Box>
);

const Download = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  const albumName = "Super name for album";
  const genreName = "Phrygian Electronic / Industrial";

  const handleCopyToClipboard = async (textToCopy, label) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log(`${label} copied to clipboard!`);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    console.log("Downloading picture manually...");
  };

  return (
    <Box sx={s.pageWrapperStyles}>
      <Box sx={s.contentLayoutGridStyles}>
        <Box 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={s.previewFrameCardStyles}
        >
          <Box sx={{
            fontSize: '7vw',
            minFontSize: '64px',
            lineHeight: 1,
            color: 'primary.main',
            opacity: isHovered ? 0.05 : 0.2,
            transition: 'opacity 0.3s ease',
            userSelect: 'none'
          }}>
            🎵
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            opacity: isHovered ? 0.05 : 0.2,
            transition: 'opacity 0.3s ease',
            userSelect: 'none'
          }}>
            <Box sx={{ fontSize: '2.2vw', minFontSize: '22px', fontWeight: 700, color: 'primary.main' }}>Art Piece</Box>
            <Box sx={{ fontSize: '2.2vw', minFontSize: '22px', fontWeight: 700, color: 'primary.main' }}>Preview</Box>
          </Box>

          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: (theme) => alpha(theme.palette.primary.main, 0.05),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isHovered ? 1 : 0,
            pointerEvents: 'none', 
            transition: 'opacity 0.3s ease',
            zIndex: 3
          }}>
            <Box 
              onClick={handleDownload}
              sx={{
                ...s.primaryButtonStyles,
                pointerEvents: 'auto', 
                transform: isHovered ? 'scale(1)' : 'scale(0.9)',
                padding: '16px 48px',
                fontSize: '18px',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 25px 50px rgba(0,85,221,0.45)'
                }
              }}
            >
              <Box sx={s.buttonGlossReflectStyles} />
              Download
            </Box>
          </Box>
        </Box>

        <Box sx={s.interactivePanelStackStyles}>
          <InfoDisplayRow 
            label="ALBUM NAME"
            value={albumName}
            onClick={() => handleCopyToClipboard(albumName, "Album name")}
          />

          <InfoDisplayRow 
            label="GENRE"
            value={genreName}
            onClick={() => handleCopyToClipboard(genreName, "Genre option")}
          />

          <Box sx={s.thankYouMessageTextStyles}>
            Thanks for using our service. If you want to change something in the final result, then press
          </Box>

          <Box 
            onClick={() => navigate('/selector')}
            sx={{
              ...s.primaryButtonStyles,
              width: '100%',
              padding: '18px',
              fontSize: '20px',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 25px 50px rgba(0,85,221,0.35)'
              }
            }}
          >
            <Box sx={s.buttonGlossReflectStyles} />
            Change
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Download;