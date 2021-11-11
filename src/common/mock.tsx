import { ProductData } from './types';

export const PRODUCT_DATA: ProductData[] = [
  {
    name: 'Milk',
    price: 3.97,
    uniqueId: 'milk',
    salePrice: { quantity: 2, newPrice: 5 },
  },
  {
    name: 'Bread',
    price: 2.17,
    uniqueId: 'bread',
    salePrice: { quantity: 3, newPrice: 6 },
  },
  {
    name: 'Banana',
    price: 0.99,
    uniqueId: 'banana',
    salePrice: null,
  },
  {
    name: 'Apple',
    price: 0.89,
    uniqueId: 'apple',
    salePrice: null,
  },
];

export const KEYED_PRODUCT_DATA = Object.fromEntries(
  PRODUCT_DATA.map((p) => [p.uniqueId, p])
);
