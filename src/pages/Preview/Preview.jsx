import React from 'react';
import { Box } from '@mui/system';

const Preview = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
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
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'row',
        gap: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 3,
        boxSizing: 'border-box'
      }}>

        <Box sx={{
          flex: 1,
          aspectRatio: '1 / 1',
          height: 'auto',
          background: 'linear-gradient(135deg, rgba(182, 235, 252, 0.5) 0%, rgba(238, 252, 255, 0.6) 100%)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '32px',
          boxShadow: '0 30px 60px rgba(0, 70, 120, 0.12), inset 0 2px 0 #fff',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <Box sx={{
            fontSize: '3.5vw',
            fontWeight: 700,
            color: '#0044cc',
            textAlign: 'center'
          }}>
            Picture
          </Box>
        </Box>

        <Box sx={{
          flex: 1,
          aspectRatio: '1 / 1',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}>
          
          <Box sx={{
            width: '100%',
            height: '62%',
            background: 'linear-gradient(to bottom, #a3f0b4 0%, #22c55e 50%, #16a34a 51%, #22c55e 100%)',
            border: '2px solid #15803d',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'pointer',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(22,163,74,0.2), inset 0 2px 2px rgba(255,255,255,0.6)',
            transition: 'all 0.2s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 30px 60px rgba(22,163,74,0.35)'
            },
            '&:active': {
              transform: 'translateY(0px)'
            }
          }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)' }} />
            <Box sx={{
              fontSize: '4vw',
              fontWeight: 800,
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.25)',
              zIndex: 2
            }}>
              Looks good
            </Box>
          </Box>

          <Box sx={{
            width: '100%',
            height: '32%',
            display: 'flex',
            flexDirection: 'row',
            gap: '6%',
            boxSizing: 'border-box'
          }}>
            
            <Box sx={{
              flex: 1,
              background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
              border: '1px solid #0044cc',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '10px',
              cursor: 'pointer',
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 20px 40px rgba(0,85,221,0.35)'
              },
              '&:active': {
                transform: 'translateY(0px)'
              }
            }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
              <Box sx={{ fontSize: '1.2vw', minFontSize: '14px', fontWeight: 'bold', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.3)', zIndex: 2 }}>
                Change picture
              </Box>
            </Box>

            <Box sx={{
              flex: 1,
              background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
              border: '1px solid #0044cc',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '10px',
              cursor: 'pointer',
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 20px 40px rgba(0,85,221,0.35)'
              },
              '&:active': {
                transform: 'translateY(0px)'
              }
            }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
              <Box sx={{ fontSize: '1.2vw', minFontSize: '14px', fontWeight: 'bold', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.3)', zIndex: 2 }}>
                Change name
              </Box>
            </Box>

          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Preview;