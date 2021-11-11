import React from 'react';

import './styles.css';
import ProductList from 'components/ProductList';
import Autocomplete from 'components/Autocomplete';
import { PRODUCT_DATA } from 'common/mock';
import { ProductData } from 'common/types';
import { moneyFormatter } from 'common/utils';
import { useGroceryStoreContext } from 'contexts/GroceryStoreContext';

function getSuggestions(value: string) {
  const inputValue = value.trim().toLowerCase();

  return inputValue
    ? PRODUCT_DATA.filter((prod) =>
        prod.name.toLowerCase().includes(inputValue)
      )
    : [];
}

function Calculator() {
  const { increaseProductItem, totalPrice, savings } = useGroceryStoreContext();

  const formattedTotalPrice = moneyFormatter.format(totalPrice);
  const formatterSavings = moneyFormatter.format(savings);

  const handleSelectValue = (prod: ProductData) => {
    increaseProductItem(prod.uniqueId);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-column calculator-leftSide">
        <ProductList />
        <Autocomplete
          getSuggestions={getSuggestions}
          onSelectValue={handleSelectValue}
        />
      </div>
      <div className="calculator-column calculator-rightSide">
        <div className="calculator-totalPrice">
          <h1>Total price</h1>
          <h2>{formattedTotalPrice}</h2>
        </div>
        <div className="calculator-savedAmount">
          <h1>You saved</h1>
          <h2>{formatterSavings}</h2>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
