import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NosActions from './pages/NosActions';

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/nos-actions" element={<NosActions />} />
    </Routes>
  );
}

export default App;
