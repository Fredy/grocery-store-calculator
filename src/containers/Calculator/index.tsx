import React from 'react';

import './styles.css';
import ProductList from 'components/ProductList';
import Autocomplete from 'components/Autocomplete';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator-column">
        <ProductList />
        <Autocomplete />
      </div>
      <div className="calculator-column calculator-rightSide">
        <div className="">
          <h1>Total price</h1>
          <h2>$12.32</h2>
        </div>
        <div className="">
          <h1>You saved</h1>
          <h2>$2.32</h2>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
