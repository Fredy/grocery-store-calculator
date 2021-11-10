import React from 'react';
import { MdDeleteOutline, MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

import './styles.css';
import { moneyFormatter } from '../../common/utils';

interface Product {
  name: string;
  quantity: number;
  cost: number;
  uniqueId: string;
}

const MOCK_DATA: Product[] = [
  { name: 'Milk', quantity: 3, cost: 3.97, uniqueId: 'milk' },
  { name: 'Bread', quantity: 3, cost: 2.17, uniqueId: 'bread' },
  { name: 'Banana', quantity: 3, cost: 0.99, uniqueId: 'banana' },
  { name: 'Apple', quantity: 3, cost: 0.89, uniqueId: 'apple' },
];

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { cost, quantity, uniqueId, name } = product;
  const formattedCost = moneyFormatter.format(quantity * cost);

  const handleIncrease = () => {
    //  TODO: do something with uniqueId
    console.debug(`Increasing ${uniqueId} in 1`);
  };

  const handleDecrease = () => {
    //  TODO: do something with uniqueId
    console.debug(`Decreasing ${uniqueId} in 1`);
  };

  const handleRemove = () => {
    //  TODO: do something with uniqueId
    console.debug(`Removing ${uniqueId} from list`);
  };

  return (
    <li className="productList-item">
      <div className="productList-item-description">
        <span>{name}</span>

        <span className="productList-item-quantity">x{quantity}</span>
      </div>
      <span className="productList-item-price">{formattedCost}</span>

      <button onClick={handleIncrease} className="productList-item-button">
        <MdOutlineRemove size={20} />
      </button>
      <button onClick={handleDecrease} className="productList-item-button">
        <MdOutlineAdd size={20} />
      </button>
      <button onClick={handleRemove} className="productList-item-button">
        <MdDeleteOutline color="red" size={20} />
      </button>
    </li>
  );
}

function ProductList() {
  return (
    <ul className="productList-container">
      {MOCK_DATA.map((v) => (
        <ProductItem product={v} key={v.uniqueId} />
      ))}
    </ul>
  );
}

export default ProductList;
