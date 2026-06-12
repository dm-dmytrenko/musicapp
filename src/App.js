import './App.css';
import { Routes, Route } from 'react-router-dom';
import Selector from './pages/Selector/Selector';
import UploadTrack from './pages/UploadTrack/UploadTrack';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/upload" element={<UploadTrack />} />
        <Route path="/selector" element={<Selector />} />
      </Routes>
    </div>
  );
}

export default App;
