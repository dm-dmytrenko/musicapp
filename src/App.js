import './App.css';
import { Routes, Route } from 'react-router-dom';
import Selector from './pages/Selector/Selector';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/selector" element={<Selector />} />
      </Routes>
    </div>
  );
}

export default App;
