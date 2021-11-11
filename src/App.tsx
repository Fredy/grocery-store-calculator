import React from 'react';

import './App.css';
import Calculator from 'containers/Calculator';
import { GroceryStoreProvider } from 'contexts/GroceryStoreContext';

function App() {
  return (
    <div className="App">
      <GroceryStoreProvider>
        <Calculator />
      </GroceryStoreProvider>
    </div>
  );
}

export default App;
