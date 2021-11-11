import React from 'react';
import { MdDeleteOutline, MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';

import './styles.css';
import { calculateItemPrice, moneyFormatter } from 'common/utils';
import { ProductData } from 'common/types';
import { KEYED_PRODUCT_DATA } from 'common/mock';
import { useGroceryStoreContext } from 'contexts/GroceryStoreContext';

interface ProductItemProps {
  product: ProductData;
  quantity: number;
}

function ProductItem({ product, quantity }: ProductItemProps) {
  const { increaseProductItem, decreaseProductItem, removeProductItem } =
    useGroceryStoreContext();
  const { uniqueId, name } = product;
  const formattedPrice = moneyFormatter.format(
    calculateItemPrice(uniqueId, quantity)
  );

  const handleIncrease = () => {
    increaseProductItem(uniqueId);
  };

  const handleDecrease = () => {
    decreaseProductItem(uniqueId);
  };

  const handleRemove = () => {
    removeProductItem(uniqueId);
  };

  return (
    <li className="productList-item">
      <div className="productList-item-description">
        <span className="productList-item-name">{name}</span>

        <span className="productList-item-quantity">x{quantity}</span>
      </div>

      <div className="productList-item-buttonGroup">
        <button onClick={handleDecrease} className="productList-item-button">
          <MdOutlineRemove size={20} />
        </button>
        <button onClick={handleIncrease} className="productList-item-button">
          <MdOutlineAdd size={20} />
        </button>
      </div>

      <span className="productList-item-price">{formattedPrice}</span>
      <button onClick={handleRemove} className="productList-item-button">
        <MdDeleteOutline color="red" size={20} />
      </button>
    </li>
  );
}

function ProductList() {
  const { productsMap } = useGroceryStoreContext();

  return (
    <ul className="productList-container">
      {Array.from(productsMap).map(([key, quantity]) => (
        <ProductItem
          product={KEYED_PRODUCT_DATA[key]}
          quantity={quantity}
          key={key}
        />
      ))}
    </ul>
  );
}

export default ProductList;
