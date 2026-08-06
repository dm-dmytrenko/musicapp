import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../components/ActionButton/ActionButton';
import { processImage } from '../../utils/imageProcessing';

import { PICSUM_API, WORD_API } from '../../config/apiEndpoints';

import * as s from './Download.styles';

const MUSIC_GENRES = [
  'Synthwave', 'Lo-Fi Hip Hop', 'Cyberpunk Industrial', 'Phonk', 
  'Ambient', 'Deep House', 'Future Bass', 'Hyperpop', 'Eurobeat', 
  'Dreamcore Pop', 'Dark Techno', 'Chillhop', 'Psytrance', 
  'Vaporwave', 'Garage Rock', 'Glitch Hop', 'Liquid Drum & Bass'
];

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
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [projectName, setProjectName] = useState('');
  const [musicGenre, setMusicGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const chosenOptions = useSelector((state) => state.options.selectedOptions);

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

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${projectName || "album-cover"}.png`;

    link.click();
  };

  useEffect(() => {
    const fetchAllProjectData = async () => {
      try {
        setIsLoading(true);

        const randomGenre = MUSIC_GENRES[Math.floor(Math.random() * MUSIC_GENRES.length)];
        setMusicGenre(randomGenre);

        const [wordResponse, imageResponse] = await Promise.all([
          fetch(WORD_API.GET_WORDS(2)),
          fetch(PICSUM_API.getRandomSquareEndpoint(500))
        ]);

        if (!wordResponse.ok || !imageResponse.ok) {
          throw new Error('API pipeline error occurred.');
        }
        const wordsArray = await wordResponse.json(); 
        
        if (wordsArray && wordsArray.length >= 2) {
          setProjectName(`${wordsArray[0]} ${wordsArray[1]}`);
        } else {
          setProjectName("sonic biscuit"); 
        }

        const processedImage = await processImage(imageResponse.url);
        setImageUrl(processedImage);
      } catch (error) {
        console.error("Error executing dynamic async data resolution:", error);
        setProjectName("velvet track");
        setImageUrl(`https://picsum.photos/500?random=${Math.random()}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProjectData();
  }, []);

  return (
    <Box sx={s.pageWrapperStyles}>
      <Box sx={s.contentLayoutGridStyles}>
        {chosenOptions.includes("Opt_2") && (
          <Box 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={s.previewFrameCardStyles}
          >
            {isLoading ? (
              <Box sx={{ color: 'primary.main', fontSize: '18px', fontWeight: 700 }}>
                {t('download.loading_art')}
              </Box>
            ) : (
              <Box 
                component="img"
                src={imageUrl || null}
                alt="Generated Dynamic Artwork"
                sx={s.pixelArtImageElementStyles}
              />
            )}

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
              <ActionButton
                variant="primary"
                onClick={handleDownload}
                sx={{
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
                {t('download.download_button')}
              </ActionButton>
            </Box>
          </Box>
        )}

        <Box sx={s.interactivePanelStackStyles}>
          {!isLoading && projectName && chosenOptions.includes("Opt_1") && (
            <InfoDisplayRow 
              label={t('download.album_name_label')}
              value={projectName}
              onClick={() => handleCopyToClipboard(projectName, "Album name")}
            />
          )}

          {!isLoading && musicGenre && chosenOptions.includes("Opt_3") && (
            <InfoDisplayRow 
              label={t('download.genre_label')}
              value={musicGenre}
              onClick={() => handleCopyToClipboard(musicGenre, "Genre option")}
            />
          )}

          <Box sx={s.thankYouMessageTextStyles}>
            {t('download.thanks_message')}
          </Box>

          <ActionButton
            variant="primary"
            onClick={() => navigate('/change')}
            sx={{
              width: '100%',
              maxWidth: '100%',
              padding: '18px',
              fontSize: '2vw',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 25px 50px rgba(0,85,221,0.35)'
              }
            }}
          >
            {t('download.change_button')}
          </ActionButton>
        </Box>

      </Box>
    </Box>
  );
};

export default Download;