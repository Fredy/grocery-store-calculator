import React from 'react';
import { MdDeleteOutline, MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

import './styles.css';

const MOCK_DATA = [
  'something',
  'milk',
  'something',
  'something',
  'something',
  'something',
  'milk',
  'milk',
  'bread',
  'bread',
  'milk',
  'bread',
  'milk',
  'something',
  'milk',
  'milk',
  'bread',
  'milk',
  'milk',
];

function ProductItem() {
  return (
    <li className="productList-item">
      <div className="productList-item-description">
        <span>something</span>

        <span className="productList-item-quantity">x19</span>
      </div>
      <span className="productList-item-price">$12</span>

      <button className="productList-item-button">
        <MdOutlineRemove size={20} />
      </button>
      <button className="productList-item-button">
        <MdOutlineAdd size={20} />
      </button>
      <button className="productList-item-button">
        <MdDeleteOutline color="red" size={20} />
      </button>
    </li>
  );
}

function ProductList() {
  return (
    <ul className="productList-container">
      {MOCK_DATA.map(() => (
        <ProductItem />
      ))}
    </ul>
  );
}

export default ProductList;
