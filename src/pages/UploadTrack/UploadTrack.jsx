import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const UploadTrack = () => {
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!isUploading) setIsDraggingFile(true);
  };

  const handleDragLeave = () => {
    setIsDraggingFile(false);
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      navigate('/selector');
    }, 900);
  };

  const processFile = (file) => {
    if (file) {
      console.log("Audio file received:", file.name);
      simulateUpload();
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    if (isUploading) return;
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleContainerClick = () => {
    if (!isUploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      processFile(files[0]);
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

      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*"
        style={{ display: 'none' }} 
      />

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
          {isUploading ? "Analyzing frequencies..." : "Upload the track"}
        </Box>

        <Box
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleContainerClick}
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: isUploading ? 'default' : 'pointer',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            boxSizing: 'border-box',
            transform: isDraggingFile ? 'scale(1.01)' : 'scale(1)',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              background: isUploading ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.55)',
              boxShadow: isUploading ? '0 30px 60px rgba(0, 70, 120, 0.12)' : '0 35px 70px rgba(0, 70, 120, 0.18)'
            },
            '@keyframes oceanRiseUp': {
              '0%': { top: '100%' },
              '100%': { top: '-20%' }
            },
            '@keyframes oceanChopLeft': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            },
            '@keyframes oceanChopRight': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(-360deg)' }
            }
          }}
        >
          {isUploading && (
            <Box sx={{
              position: 'absolute',
              left: 0,
              width: '100%',
              height: '140%',
              zIndex: 1,
              animation: 'oceanRiseUp 1s cubic-bezier(0.15, 0.85, 0.35, 1) forwards'
            }}>
              
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: '-30%',
                width: '160%',
                height: '160%',
                background: 'linear-gradient(to top, #002288 0%, #0044cc 60%, #0077ff 100%)',
                borderRadius: '43%',
                animation: 'oceanChopLeft 2.2s linear infinite',
                opacity: 0.6
              }} />
              
              <Box sx={{
                position: 'absolute',
                top: 5,
                left: '-25%',
                width: '150%',
                height: '150%',
                background: 'linear-gradient(to top, #0033aa 0%, #0055dd 40%, #22bbff 100%)',
                borderRadius: '40%',
                animation: 'oceanChopRight 1.7s linear infinite',
                opacity: 0.85
              }} />

              <Box sx={{
                position: 'absolute',
                top: 15,
                left: '-20%',
                width: '140%',
                height: '140%',
                background: 'linear-gradient(to top, #0044cc 0%, #0066ff 40%, #00aaff 85%, rgba(255,255,255,0.8) 100%)',
                borderRadius: '45%',
                animation: 'oceanChopLeft 1.2s linear infinite'
              }} />

            </Box>
          )}

          <Box sx={{ 
            fontSize: '3.5vw',
            fontWeight: 700, 
            color: isUploading ? '#fff' : '#0055dd',
            userSelect: 'none',
            letterSpacing: '-0.5px',
            zIndex: 2,
            transition: 'color 0.15s',
            textShadow: isUploading ? '0 2px 12px rgba(0,34,136,0.6)' : 'none'
          }}>
            {isUploading ? "Uploading..." : "Drag & drop"}
          </Box>
          
          {!isUploading && (
            <Box sx={{
              fontSize: '1.2vw',
              minFontSize: '12px',
              fontWeight: 500,
              color: 'rgba(0, 68, 204, 0.6)',
              userSelect: 'none',
              zIndex: 2
            }}>
              or click to browse local files
            </Box>
          )}
        </Box>

        <Box 
          onClick={() => !isUploading && navigate('/selector')} 
          sx={{
            width: '50%',
            background: isUploading 
              ? 'linear-gradient(to bottom, #d5f3ff 0%, #b3d7ff 100%)'
              : 'linear-gradient(to bottom, #7cd8ff 0%, #0077ff 50%, #0055dd 51%, #0088ff 100%)',
            border: isUploading ? '1px solid #b3d7ff' : '1px solid #0044cc',
            borderRadius: '20px',
            padding: '22px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: isUploading ? 'rgba(0, 68, 204, 0.4)' : '#fff',
            cursor: isUploading ? 'default' : 'pointer',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: isUploading ? 'none' : '0 15px 30px rgba(0,85,221,0.2), inset 0 1px 1px rgba(255,255,255,0.5)',
            textShadow: isUploading ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
            transition: 'all 0.2s',
            pointerEvents: isUploading ? 'none' : 'auto',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 20px 40px rgba(0,85,221,0.35)',
            },
            '&:active': {
              transform: 'translateY(0px)'
            }
          }}
        >
          {!isUploading && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)' }} />}
          Next
        </Box>

      </Box>
    </Box>
  );
};

export default UploadTrack;