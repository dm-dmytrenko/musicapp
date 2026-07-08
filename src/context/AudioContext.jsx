import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const [rawTrackFile, setRawTrackFile] = useState(null);

  return (
    <AudioContext.Provider value={{ rawTrackFile, setRawTrackFile }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioFile = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioFile must be used within an AudioProvider');
  }
  return context;
};