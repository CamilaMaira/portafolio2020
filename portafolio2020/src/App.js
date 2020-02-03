import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>que muera piñera y no mi compañera</p>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;


