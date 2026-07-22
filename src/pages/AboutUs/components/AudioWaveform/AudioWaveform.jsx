import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import * as s from './AudioWaveform.styles';

const AudioWaveform = ({ sx }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerY = height / 2;
    const barCount = 32;
    const barWidth = 7.5;
    const gap = (width - barCount * barWidth) / (barCount - 1);
    const currentHeights = new Array(barCount).fill(0);
    const targetHeights = new Array(barCount).fill(0);

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      frame += 0.04; 

      for (let i = 0; i < barCount; i++) {
        const bandRatio = i / barCount;
        const bass = Math.pow(Math.sin(frame * 1.1), 4) * Math.exp(-bandRatio * 3) * 0.95;
        const midEnergy = Math.sin(frame * 1.8 + i * 0.3) * Math.cos(frame * 0.9 + i * 0.15);
        const mids = Math.max(0, midEnergy) * Math.sin(bandRatio * Math.PI) * 0.75;
        const trebleJitter = (Math.sin(frame * 3.2 + i * 0.9) * 0.5 + 0.5) * Math.pow(bandRatio, 1.2) * 0.6;
        let target = (bass + mids + trebleJitter) * (height * 0.85);
        target = Math.max(8, Math.min(height * 0.88, target));

        targetHeights[i] = target;

        if (currentHeights[i] < targetHeights[i]) {
          currentHeights[i] += (targetHeights[i] - currentHeights[i]) * 0.18;
        } else {
          currentHeights[i] -= (currentHeights[i] - targetHeights[i]) * 0.06;
        }

        const barHeight = currentHeights[i];
        const x = i * (barWidth + gap);
        const y = centerY - barHeight / 2;
        const heightRatio = barHeight / (height * 0.88);
        const hue = 225 - heightRatio * 55; 
        const lightness = 45 + heightRatio * 20;
        ctx.fillStyle = `hsl(${hue}, 85%, ${lightness}%)`;

        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, barWidth, barHeight, 2.5);
        } else {
          ctx.rect(x, y, barWidth, barHeight);
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box sx={{ ...s.waveformCanvasBoxStyles, ...sx }}>
      <canvas 
        ref={canvasRef} 
        style={{ width: '100%', height: '100%', display: 'block' }} 
      />
    </Box>
  );
};

export default AudioWaveform;