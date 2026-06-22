import React from 'react';
import { Box } from '@mui/system';

const Download = () => {
  const albumName = "Super name for album";

  const handlePictureDownload = (e) => {
    e.stopPropagation();
    console.log("Downloading picture manually...");
  };

  const handleCopyName = async () => {
    try {
      await navigator.clipboard.writeText(albumName);
      console.log("Album name copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Box sx={{
      width: '100vw',
      height: '100%',
      display: 'flex',
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
        maxWidth: '1100px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '6%',
        position: 'relative',
        zIndex: 3,
        boxSizing: 'border-box'
      }}>

        <Box sx={{
          flex: '1 1 40%',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          boxSizing: 'border-box'
        }}>
          <Box 
            sx={{
              width: '100%',
              aspectRatio: '1 / 1',
              background: 'linear-gradient(135deg, #e6f0ff 0%, #b3d7ff 100%)',
              border: '1px solid rgba(0, 68, 204, 0.15)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 70, 120, 0.15), inset 0 2px 4px rgba(255,255,255,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              role: 'img',
              ariaLabel: 'Album Art Preview',
              '&:hover .download-overlay': {
                opacity: 1
              }
            }}
          >
            <Box 
              className="download-overlay"
              onClick={handlePictureDownload}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 34, 136, 0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                cursor: 'pointer',
                transition: 'opacity 0.25s ease',
                zIndex: 4
              }}
            >
              <Box sx={{
                background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
                border: '1px solid #0044cc',
                borderRadius: '50px',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: 800,
                color: '#fff',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.4)',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                transition: 'transform 0.15s',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' },
                '&:active': { transform: 'scale(0.95)' }
              }}>
                Get Image
              </Box>
            </Box>

            <Box sx={{ color: '#0055dd', opacity: 0.25, fontSize: '4.5vw', fontWeight: 900, userSelect: 'none' }}>
              ♫
            </Box>
          </Box>

          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Box sx={{ 
              fontSize: '24px', 
              fontWeight: 800, 
              color: '#0044cc', 
              letterSpacing: '-0.5px',
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%'
            }}>
              {albumName}
            </Box>

            <Box 
              onClick={handleCopyName}
              sx={{
                width: '100%',
                background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
                border: '1px solid #0044cc',
                borderRadius: '20px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#fff',
                cursor: 'pointer',
                textAlign: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 24px rgba(0,85,221,0.15), inset 0 1px 1px rgba(255,255,255,0.5)',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                transition: 'all 0.2s',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 16px 32px rgba(0,85,221,0.25)'
                },
                '&:active': {
                  transform: 'translateY(0px)'
                }
              }}
            >
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
              Copy Name to Clipboard
            </Box>
          </Box>
        </Box>

        <Box sx={{
          flex: '1 1 54%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4vh',
          boxSizing: 'border-box'
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2vh', width: '100%' }}>
            <Box sx={{ 
              fontSize: '16px', 
              fontWeight: 500, 
              color: '#333333', 
              lineHeight: '1.6',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.7)',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0, 70, 120, 0.06)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxSizing: 'border-box',
              textAlign: 'left'
            }}>
              Thanks for using our service.<br /><br />
              Your picture has been automatically saved. If not, please fetch it manually by hovering over the art piece and pressing the <strong>“Get Image”</strong> asset link.
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Download;