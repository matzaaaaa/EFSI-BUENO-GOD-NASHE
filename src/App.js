import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About.js';
import Creaciones from './Pages/Creaciones.js';
import Favoritos from './Pages/Favoritos.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route index element={<About />} />
      <Route path="invoices" element={<Creaciones />} />
      <Route path="activity" element={<Favoritos />} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;