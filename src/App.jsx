import React from 'react';
import Home from './pages/Home.jsx';

function App() {
  try {
    return <Home />;
  } catch (error) {
    console.error("Erreur dans Home.jsx :", error);
    return <div>Erreur détectée</div>;
  }
}

export default App;
