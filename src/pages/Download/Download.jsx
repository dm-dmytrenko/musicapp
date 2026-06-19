import React from 'react';
import { Box } from '@mui/system';

const Download = () => {
  const albumName = "Super name for album";

  const handlePictureDownload = () => {
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
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5vh',
        position: 'relative',
        zIndex: 3,
        boxSizing: 'border-box',
        textAlign: 'center'
      }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
          <Box component="h1" sx={{ 
            fontSize: '4.5vw', 
            minFontSize: '36px',
            fontWeight: 800, 
            color: '#0044cc',  
            margin: 0,
            letterSpacing: '-1px'
          }}>
            Download
          </Box>
          
          <Box sx={{ 
            fontSize: '1.6vw', 
            minFontSize: '16px',
            fontWeight: 500, 
            color: '#333333', 
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Thanks for using our service.<br />
            Your picture has been automatically downloaded. If not please<br />
            download it manually by pressing the button “Download” on the picture
          </Box>
        </Box>

        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '6%',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          marginTop: '2vh'
        }}>

          <Box 
            onClick={handlePictureDownload}
            sx={{
              flex: 1,
              maxWidth: '380px',
              aspectRatio: '1 / 1',
              background: 'linear-gradient(to bottom, #a3f0b4 0%, #22c55e 50%, #16a34a 51%, #22c55e 100%)',
              border: '2px solid #15803d',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(22,163,74,0.15), inset 0 2px 2px rgba(255,255,255,0.6)',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 30px 60px rgba(22,163,74,0.3)'
              },
              '&:active': {
                transform: 'translateY(0px)'
              }
            }}
          >
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)' }} />
            <Box sx={{
              fontSize: '2.5vw',
              minFontSize: '24px',
              fontWeight: 800,
              color: '#fff',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              zIndex: 2
            }}>
              Download
            </Box>
          </Box>

          <Box sx={{
            flex: 1,
            maxWidth: '440px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxSizing: 'border-box'
          }}>
            
            <Box sx={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.7)',
              borderRadius: '20px',
              padding: '24px',
              fontSize: '1.8vw',
              minFontSize: '18px',
              fontWeight: 700,
              color: '#0044cc',
              boxShadow: '0 15px 35px rgba(0, 70, 120, 0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxSizing: 'border-box'
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
                padding: '18px',
                fontSize: '1.4vw',
                minFontSize: '16px',
                fontWeight: 'bold',
                color: '#fff',
                cursor: 'pointer',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 20px 40px rgba(0,85,221,0.35)'
                },
                '&:active': {
                  transform: 'translateY(0px)'
                }
              }}
            >
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
              Copy name
            </Box>

          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Download;