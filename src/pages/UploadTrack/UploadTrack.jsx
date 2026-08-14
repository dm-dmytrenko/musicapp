import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAudioFile } from '../../context/AudioContext';
import ActionButton from '../../components/ActionButton/ActionButton';
import * as s from './UploadTrack.styles';
import { formatTime, generateMockWaveformHeights } from './UploadTrack.utils';

const UploadTrack = () => {
  const { t } = useTranslation();
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showTrimmer, setShowTrimmer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [waveformBars, setWaveformBars] = useState([]);
  const { setRawTrackFile } = useAudioFile();

  const fileInputRef = useRef(null);
  const timelineRef = useRef(null);
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const isDraggingWindow = useRef(false);

  const navigate = useNavigate();

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

  const processFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('audio/')) {
      alert(t('uploadTrack.alert_invalid_format'));
      return;
    }

    setIsUploading(true);
    setWaveformBars(generateMockWaveformHeights());

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContextRef.current = new AudioContextClass();
    const reader = new FileReader();

    reader.onload = (e) => {
      audioContextRef.current.decodeAudioData(e.target.result)
        .then((buffer) => {
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
          alert(t('uploadTrack.alert_read_error'));
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
      const file = files[0];

      if (file.size > 50 * 1024 * 1024) {
        alert(t('uploadTrack.alert_file_too_large'));
        return; 
      }
      setRawTrackFile(file);
      processFile(file);
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

  const getWindowStyles = () => {
    if (!audioDuration) return { left: '0%', width: '100%' };
    const widthPercent = (15 / audioDuration) * 100;
    const leftPercent = (startTime / audioDuration) * 100;
    return { left: `${leftPercent}%`, width: `${widthPercent}%` };
  };

  return (
    <Box sx={s.pageWrapperStyles}>
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*"
        style={{ display: 'none' }} 
      />

      <Box sx={s.mainStackContainerStyles}>
        <Box component="h1" sx={s.masterHeadingStyles}>
          {isUploading ? t('uploadTrack.heading_analyzing') : showTrimmer ? t('uploadTrack.heading_trimmer') : t('uploadTrack.heading_upload')}
        </Box>

        <Box
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleContainerClick}
          sx={{
            ...s.interactionDropzoneCardStyles,
            background: isDraggingFile ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.4)',
            border: isDraggingFile ? '3px dashed #0077ff' : '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: isDraggingFile 
              ? '0 40px 80px rgba(0, 70, 120, 0.25)' 
              : '0 30px 60px rgba(0, 70, 120, 0.12), inset 0 2px 0 #fff',
            cursor: (isUploading || showTrimmer) ? 'default' : 'pointer',
            transform: isDraggingFile ? 'scale(1.01)' : 'scale(1)',
            '&:hover': {
              background: (isUploading || showTrimmer) ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.55)',
              boxShadow: (isUploading || showTrimmer) ? '0 30px 60px rgba(0, 70, 120, 0.12)' : '0 35px 70px rgba(0, 70, 120, 0.18)'
            }
          }}
        >
          {isUploading && (
            <Box sx={s.liquidWaveBackdropContainerStyles}>
              <Box sx={{ ...s.sharedWaveOverlayStyles, top: 0, left: '-30%', width: '160%', height: '160%', background: 'linear-gradient(to top, #002288 0%, #0044cc 60%, #0077ff 100%)', animation: `${s.oceanChopLeft} 2.2s linear infinite`, opacity: 0.6 }} />
              <Box sx={{ ...s.sharedWaveOverlayStyles, top: 5, left: '-25%', background: 'linear-gradient(to top, #0033aa 0%, #0055dd 40%, #22bbff 100%)', animation: `${s.oceanChopRight} 1.7s linear infinite`, opacity: 0.85 }} />
              <Box sx={{ ...s.sharedWaveOverlayStyles, top: 15, left: '-20%', width: '140%', height: '140%', background: 'linear-gradient(to top, #0044cc 0%, #0066ff 40%, #00aaff 85%, rgba(255,255,255,0.8) 100%)', animation: `${s.oceanChopLeft} 1.2s linear infinite` }} />
            </Box>
          )}

          {!showTrimmer && (
            <>
              <Box sx={{ 
                fontSize: { xs: '28px', sm: '37px', md: '43px' },
                fontWeight: 700, 
                color: isUploading ? '#fff' : '#0055dd',
                userSelect: 'none',
                letterSpacing: '-0.5px',
                zIndex: 2,
                transition: 'color 0.15s',
                textShadow: isUploading ? '0 2px 12px rgba(0,34,136,0.6)' : 'none'
              }}>
                {isUploading ? t('uploadTrack.dropzone_uploading') : t('uploadTrack.dropzone_drag')}
              </Box>
              
              {!isUploading && (
                <Box sx={{ 
                  fontSize: { xs: '12px', sm: '14px', md: '16px' }, 
                  fontWeight: 500, 
                  color: 'rgba(0, 68, 204, 0.6)', 
                  userSelect: 'none', 
                  zIndex: 2 
                }}>
                  {t('uploadTrack.dropzone_browse')}
                </Box>
              )}
            </>
          )}

          {showTrimmer && (
            <Box onClick={(e) => e.stopPropagation()} sx={s.trimmerCentralGridStyles}>
              <Box sx={s.trimmerLayoutHeaderRowStyles}>
                <Box sx={s.trimmerBadgeTextStyles}>{formatTime(startTime)}</Box>

                <Box onClick={togglePlayback} sx={s.audioPlaybackActionButtonStyles}>
                  {isPlaying ? (
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                      <Box sx={{ width: '4px', height: '18px', background: '#fff', borderRadius: '2px' }} />
                      <Box sx={{ width: '4px', height: '18px', background: '#fff', borderRadius: '2px' }} />
                    </Box>
                  ) : (
                    <Box sx={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #fff', marginLeft: '5px' }} />
                  )}
                </Box>

                <Box sx={s.trimmerBadgeTextStyles}>{formatTime(startTime + 15)}</Box>
              </Box>

              <Box ref={timelineRef} onMouseDown={handleTimelineMouseDown} sx={s.interactiveTimelineTrackStyles}>
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
                  <Box sx={s.readyBadgeStyles}>
                    15s
                    <Box 
                      component="span" 
                      sx={{ 
                        display: 'block'
                      }}
                    >
                      {t('uploadTrack.trimmer_ready')}
                    </Box>
                  </Box>
                </Box>
              </Box>
              
              <Box sx={s.genericFooterCaptionTextStyles}>
                {t('uploadTrack.trimmer_footer', { duration: formatTime(audioDuration) })}
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={s.actionContainerWrapperStyles}>
          <ActionButton
            variant="workflow"
            disabled={isUploading}
            onClick={() => handleNavigation(startTime, showTrimmer ? startTime + 15 : audioDuration)}
          >
            {t('uploadTrack.button_next')}
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadTrack;