import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const UploadTrack = () => {
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const navigate = useNavigate();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingFile(true);
  };

  const handleDragLeave = () => {
    setIsDraggingFile(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      console.log("Audio file received:", files[0].name);
    }
  };

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
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4vh',
        position: 'relative',
        zIndex: 3,
        boxSizing: 'border-box'
      }}>
        
        <Box component="h1" sx={{ 
          fontSize: '4.5vw', 
          minFontSize: '36px',
          fontWeight: 800, 
          color: '#0044cc',  
          margin: 0,
          letterSpacing: '-1px',
          textShadow: '0 2px 10px rgba(0, 68, 204, 0.1)'
        }}>
          Upload the track
        </Box>

        <Box
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          sx={{
            width: '100%',
            height: '45vh',
            minHeight: '300px',
            background: isDraggingFile ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.4)',
            border: isDraggingFile ? '3px dashed #0077ff' : '2px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '32px',
            boxShadow: isDraggingFile 
              ? '0 40px 80px rgba(0, 70, 120, 0.25)' 
              : '0 30px 60px rgba(0, 70, 120, 0.12), inset 0 2px 0 #fff',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            boxSizing: 'border-box',
            transform: isDraggingFile ? 'scale(1.01)' : 'scale(1)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.55)',
              boxShadow: '0 35px 70px rgba(0, 70, 120, 0.18)'
            }
          }}
        >
          <Box sx={{ 
            fontSize: '3.5vw',
            fontWeight: 700, 
            color: '#0055dd',
            userSelect: 'none',
            letterSpacing: '-0.5px'
          }}>
            Drag & drop
          </Box>
        </Box>

        <Box 
          onClick={() => navigate('/selector')} 
          sx={{
            width: '100%',
            background: 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
            border: '1px solid #0044cc',
            borderRadius: '20px',
            padding: '22px',
            textAlign: 'center',
            fontSize: '20px',
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
              boxShadow: '0 20px 40px rgba(0,85,221,0.35)',
            },
            '&:active': {
              transform: 'translateY(0px)'
            }
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />
          I don't have track yet
        </Box>

      </Box>
    </Box>
  );
};

export default UploadTrack;