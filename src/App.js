import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeTerminal from './page/home/HomeTerminal';
import GameEngine from './page/jeu/Jeu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTerminal />} />
        <Route path="/jeu" element={<GameEngine />} />
      </Routes>
    </Router>
  );
}

export default App;
