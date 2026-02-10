import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import VariationView from './pages/VariationView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/variation/:id" element={<VariationView />} />
      </Routes>
    </Router>
  );
}

export default App;
