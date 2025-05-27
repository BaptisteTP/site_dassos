import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NosActions from './pages/NosActions'; // assure-toi que ce fichier existe

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nos-actions" element={<NosActions />} />
    </Routes>
  );
}

export default App;
