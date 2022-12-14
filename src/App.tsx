import React from 'react';
import {Skela, SkelaTable, SkelaCard } from './components';

function App() {
  return (
    <div className="App">
      <Skela  />
      <SkelaCard cardWidth="200px"  cardHeight="300px" animationType="pulse" />
      <SkelaTable cols={4} rows={4} color="orange" />
    </div>
  );
}

export default App;
