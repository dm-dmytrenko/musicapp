import './App.css';
import { Routes, Route } from 'react-router-dom';
import Selector from './pages/Selector/Selector';
import UploadTrack from './pages/UploadTrack/UploadTrack';
import Preview from './pages/Preview/Preview';
import Download from './pages/Download/Download';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/upload" element={<UploadTrack />} />
        <Route path="/selector" element={<Selector />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
