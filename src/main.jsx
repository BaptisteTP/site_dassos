// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx'; // Importez le composant Home
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route vers Home */}
      <Route path="*" element={<App />} /> {/* Route par défaut */}
    </Routes>
  </BrowserRouter>
);
