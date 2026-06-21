import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const UploadTrack = () => {
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showTrimmer, setShowTrimmer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [waveformBars, setWaveformBars] = useState([]);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const timelineRef = useRef(null);
  
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const isDraggingWindow = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      stopAudio();
      startAudio(startTime);
    }
  }, [startTime]);

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!isUploading && !showTrimmer) setIsDraggingFile(true);
  };

  const handleDragLeave = () => {
    setIsDraggingFile(false);
  };

  const generateMockWaveform = () => {
    const bars = [];
    for (let i = 0; i < 60; i++) {
      bars.push(Math.floor(Math.random() * 75) + 15);
    }
    setWaveformBars(bars);
  };

  const processFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('audio/')) {
      alert("Invalid file format. Please upload an audio track.");
      return;
    }

    // Start the loading state and animation immediately
    setIsUploading(true);
    generateMockWaveform();

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContextRef.current = new AudioContextClass();
    const reader = new FileReader();

    reader.onload = (e) => {
      audioContextRef.current.decodeAudioData(e.target.result)
        .then((buffer) => {
          // Finished! Transition immediately based on real-time decoding completion
          audioBufferRef.current = buffer;
          const duration = buffer.duration;
          setAudioDuration(duration);
          setIsUploading(false);

          if (duration > 15) {
            setShowTrimmer(true);
            setStartTime(0);
          } else {
            handleNavigation(0, duration);
          }
        })
        .catch(() => {
          setIsUploading(false);
          alert("Error reading audio data.");
        });
    };
    reader.readAsArrayBuffer(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    if (isUploading || showTrimmer) return;
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleContainerClick = () => {
    if (!isUploading && !showTrimmer && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const calculateStartTimeFromX = (clientX) => {
    if (!timelineRef.current || audioDuration <= 15) return 0;
    const rect = timelineRef.current.getBoundingClientRect();
    const windowWidth = (15 / audioDuration) * rect.width;
    const minX = rect.left + windowWidth / 2;
    const maxX = rect.right - windowWidth / 2;
    const boundedX = Math.max(minX, Math.min(clientX, maxX));
    const percent = (boundedX - minX) / (rect.width - windowWidth);
    return percent * (audioDuration - 15);
  };

  const handleTimelineMouseDown = (e) => {
    isDraggingWindow.current = true;
    const newStart = calculateStartTimeFromX(e.clientX);
    setStartTime(newStart);
    window.addEventListener('mousemove', handleTimelineMouseMove);
    window.addEventListener('mouseup', handleTimelineMouseUp);
  };

  const handleTimelineMouseMove = (e) => {
    if (!isDraggingWindow.current) return;
    const newStart = calculateStartTimeFromX(e.clientX);
    setStartTime(newStart);
  };

  const handleTimelineMouseUp = () => {
    isDraggingWindow.current = false;
    window.removeEventListener('mousemove', handleTimelineMouseMove);
    window.removeEventListener('mouseup', handleTimelineMouseUp);
  };

  const startAudio = (offset) => {
    if (!audioBufferRef.current || !audioContextRef.current) return;
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    sourceNodeRef.current = audioContextRef.current.createBufferSource();
    sourceNodeRef.current.buffer = audioBufferRef.current;
    sourceNodeRef.current.connect(audioContextRef.current.destination);
    
    sourceNodeRef.current.start(0, offset, 15);
    setIsPlaying(true);

    sourceNodeRef.current.onended = () => {
      if (!isDraggingWindow.current) {
        setIsPlaying(false);
      }
    };
  };

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
      } catch (err) {}
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio(startTime);
    }
  };

  const handleNavigation = (start, end) => {
    stopAudio();
    navigate('/selector', { state: { trimStart: start, trimEnd: end } });
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getWindowStyles = () => {
    if (!audioDuration) return { left: '0%', width: '100%' };
    const widthPercent = (15 / audioDuration) * 100;
    const leftPercent = (startTime / audioDuration) * 100;
    return { left: `${leftPercent}%`, width: `${widthPercent}%` };
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
          {isUploading ? "Analyzing frequencies..." : showTrimmer ? "Select 15s Snippet" : "Upload the track"}
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
            cursor: (isUploading || showTrimmer) ? 'default' : 'pointer',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            boxSizing: 'border-box',
            transform: isDraggingFile ? 'scale(1.01)' : 'scale(1)',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              background: (isUploading || showTrimmer) ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.55)',
              boxShadow: (isUploading || showTrimmer) ? '0 30px 60px rgba(0, 70, 120, 0.12)' : '0 35px 70px rgba(0, 70, 120, 0.18)'
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
              animation: 'oceanRiseUp 0.8s cubic-bezier(0.1, 0.8, 0.25, 1) forwards'
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

          {!showTrimmer && (
            <>
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
            </>
          )}

          {showTrimmer && (
            <Box onClick={(e) => e.stopPropagation()} sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', zIndex: 2 }}>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ color: '#0044cc', fontWeight: 800, fontSize: '16px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.8)' }}>
                  {formatTime(startTime)}
                </Box>

                <Box 
                  onClick={togglePlayback}
                  sx={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #22bbff 0%, #0055dd 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(0,68,204,0.35), inset 0 1px 1px rgba(255,255,255,0.3)',
                    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { transform: 'scale(1.08)', boxShadow: '0 12px 24px rgba(0,68,204,0.45)' },
                    '&:active': { transform: 'scale(0.95)' }
                  }}
                >
                  {isPlaying ? (
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                      <Box sx={{ width: '4px', height: '18px', background: '#fff', borderRadius: '2px' }} />
                      <Box sx={{ width: '4px', height: '18px', background: '#fff', borderRadius: '2px' }} />
                    </Box>
                  ) : (
                    <Box sx={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #fff', marginLeft: '5px' }} />
                  )}
                </Box>

                <Box sx={{ color: '#0044cc', fontWeight: 800, fontSize: '16px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.8)' }}>
                  {formatTime(startTime + 15)}
                </Box>
              </Box>

              <Box 
                ref={timelineRef}
                onMouseDown={handleTimelineMouseDown}
                sx={{
                  width: '100%',
                  height: '85px',
                  background: 'rgba(0, 68, 204, 0.05)',
                  borderRadius: '20px',
                  position: 'relative',
                  cursor: 'ew-resize',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  border: '1px solid rgba(0, 68, 204, 0.08)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                {waveformBars.map((barHeight, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      width: `${100 / 60 - 0.5}%`,
                      height: `${barHeight}%`,
                      background: 'rgba(0, 85, 221, 0.2)',
                      borderRadius: '3px',
                      transition: 'background 0.2s'
                    }}
                  />
                ))}

                <Box 
                  sx={{
                    position: 'absolute',
                    top: '-2px',
                    height: 'calc(100% + 4px)',
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '2px solid #0077ff',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0, 119, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    zIndex: 3,
                    ...getWindowStyles(),
                    '&::before, &::after': {
                      content: '""',
                      position: 'absolute',
                      top: '35%',
                      width: '2px',
                      height: '30%',
                      background: '#0077ff',
                      borderRadius: '1px'
                    },
                    '&::before': { left: '6px' },
                    '&::after': { right: '6px' }
                  }}
                >
                  <Box sx={{ 
                    color: '#0044cc', 
                    fontSize: '10px', 
                    fontWeight: 900, 
                    letterSpacing: '1px', 
                    textShadow: '0 1px 2px rgba(255,255,255,0.6)', 
                    userSelect: 'none',
                    background: 'rgba(255,255,255,0.7)',
                    padding: '2px 8px',
                    borderRadius: '6px'
                  }}>
                    15s READY
                  </Box>
                </Box>
              </Box>
              
              <Box sx={{ 
                fontSize: '12px', 
                fontWeight: 600, color: 
                'rgba(0, 68, 204, 0.5)', 
                letterSpacing: '0.2px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                cursor: 'default'
                }}>
                Drag preview glass block to change section • Total Track: {formatTime(audioDuration)}
              </Box>
            </Box>
          )}
        </Box>

        <Box 
          onClick={() => !isUploading && handleNavigation(startTime, showTrimmer ? startTime + 15 : audioDuration)} 
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