import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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

  const CopyIcon = () => (
    <Box sx={{
      width: '24px',
      height: '24px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.7
    }}>
      <Box sx={{
        width: '13px',
        height: '16px',
        border: '2px solid #0044cc',
        borderRadius: '3px',
        background: 'rgba(255, 255, 255, 0.4)',
        position: 'absolute',
        bottom: '2px',
        left: '2px',
        zIndex: 1
      }} />
      <Box sx={{
        width: '13px',
        height: '16px',
        border: '2px solid #0044cc',
        borderRadius: '3px',
        background: 'rgba(255, 255, 255, 0.6)',
        position: 'absolute',
        top: '2px',
        right: '2px',
        zIndex: 2
      }} />
    </Box>
  );

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5%',
      boxSizing: 'border-box',
      background: 'transparent',
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif"
    }}>

      <Box sx={{
        width: '100%',
        maxWidth: '1250px',
        display: 'flex',
        flexDirection: 'row',
        gap: '7vw',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>

        <Box 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            flex: 1,
            maxWidth: '520px',
            aspectRatio: '1 / 1',
            background: 'linear-gradient(135deg, rgba(182, 235, 252, 0.5) 0%, rgba(238, 252, 255, 0.6) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '36px',
            boxShadow: '0 40px 80px rgba(0, 70, 120, 0.15), inset 0 2px 0 #fff',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
            gap: '15px'
          }}>
          
          <Box sx={{
            fontSize: '7vw',
            minFontSize: '64px',
            lineHeight: 1,
            color: '#0044cc',
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
            <Box sx={{ fontSize: '2.2vw', minFontSize: '22px', fontWeight: 700, color: '#0044cc' }}>
              Art Piece
            </Box>
            <Box sx={{ fontSize: '2.2vw', minFontSize: '22px', fontWeight: 700, color: '#0044cc' }}>
              Preview
            </Box>
          </Box>

          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 68, 204, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
            zIndex: 3
          }}>
            <Box 
              onClick={handleDownload}
              sx={{
                background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
                border: '1px solid #0044cc',
                borderRadius: '24px',
                padding: '16px 48px',
                fontSize: '18px',
                fontWeight: 800,
                color: '#fff',
                cursor: 'pointer',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,85,221,0.3), inset 0 1px 1px rgba(255,255,255,0.5)',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                transform: isHovered ? 'scale(1)' : 'scale(0.9)',
                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 25px 50px rgba(0,85,221,0.45)'
                },
                '&:active': {
                  transform: 'scale(0.98)'
                }
              }}
            >
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
              Download
            </Box>
          </Box>
        </Box>

        <Box sx={{
          flex: 1,
          maxWidth: '560px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3.5vh',
          boxSizing: 'border-box'
        }}>
          
          <Box 
            onClick={() => handleCopyToClipboard(albumName, "Album name")}
            sx={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.7)',
              borderRadius: '28px',
              padding: '24px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(0, 70, 120, 0.06), inset 0 1px 0 #fff',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxSizing: 'border-box',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.55)',
                transform: 'translateY(-2px)',
                boxShadow: '0 25px 50px rgba(0, 70, 120, 0.1)'
              },
              '&:active': { transform: 'translateY(0px)' }
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Box sx={{ fontSize: '13px', fontWeight: 800, color: '#0044cc', opacity: 0.6, letterSpacing: '0.6px' }}>
                ALBUM NAME
              </Box>
              <Box sx={{ fontSize: '1.8vw', minFontSize: '18px', fontWeight: 700, color: '#0044cc' }}>
                {albumName}
              </Box>
            </Box>
            <CopyIcon />
          </Box>

          <Box 
            onClick={() => handleCopyToClipboard(genreName, "Genre option")}
            sx={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.7)',
              borderRadius: '28px',
              padding: '24px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(0, 70, 120, 0.06), inset 0 1px 0 #fff',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxSizing: 'border-box',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.55)',
                transform: 'translateY(-2px)',
                boxShadow: '0 25px 50px rgba(0, 70, 120, 0.1)'
              },
              '&:active': { transform: 'translateY(0px)' }
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Box sx={{ fontSize: '13px', fontWeight: 800, color: '#0044cc', opacity: 0.6, letterSpacing: '0.6px' }}>
                GENRE
              </Box>
              <Box sx={{ fontSize: '1.8vw', minFontSize: '18px', fontWeight: 700, color: '#0044cc' }}>
                {genreName}
              </Box>
            </Box>
            <CopyIcon />
          </Box>

          <Box sx={{ 
            fontSize: '1.4vw', 
            minFontSize: '15px',
            fontWeight: 600, 
            color: '#0044cc', 
            lineHeight: '1.6',
            textAlign: 'center',
            marginTop: '1.5vh',
            padding: '0 12px'
          }}>
            Thanks for using our service. If you want to change something in the final result, then press
          </Box>

          <Box 
            onClick={() => navigate('/selector')}
            sx={{
              width: '100%',
              background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
              border: '1px solid #0044cc',
              borderRadius: '24px',
              padding: '18px',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: 800,
              color: '#fff',
              cursor: 'pointer',
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 25px 50px rgba(0,85,221,0.35)'
              },
              '&:active': {
                transform: 'translateY(0px)'
              }
            }}
          >
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
            Change
          </Box>

        </Box>
      </Box>

    </Box>
  );
};

export default Download;