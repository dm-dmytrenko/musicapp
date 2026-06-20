// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import StatusBar from './components/StatusBar/StatusBar.jsx';
import UploadTrack from './pages/UploadTrack/UploadTrack.jsx';
import Selector from './pages/Selector/Selector.jsx';
import Preview from './pages/Preview/Preview.jsx';
import Download from './pages/Download/Download.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import './App.css';

const App = () => {
  return (
      <Box sx={{ 
        width: '100vw', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #b6ebfc 0%, #eefcff 100%)' 
      }}>
        
        <StatusBar />

        <Box sx={{ 
          flexGrow: 1,         
          height: 0,       
          width: '100%',
          position: 'relative',
          display: 'flex',  
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/upload" element={<UploadTrack />} />
            <Route path="/selector" element={<Selector />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </Box>

      </Box>
  );
};

export default App;