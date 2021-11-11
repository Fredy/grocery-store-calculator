import { Product, ProductData } from './types';

export const MOCK_DATA: Product[] = [
  { name: 'Milk', quantity: 3, cost: 3.97, uniqueId: 'milk' },
  { name: 'Bread', quantity: 3, cost: 2.17, uniqueId: 'bread' },
  { name: 'Banana', quantity: 3, cost: 0.99, uniqueId: 'banana' },
  { name: 'Apple', quantity: 3, cost: 0.89, uniqueId: 'apple' },
];


export const PRODUCT_DATA: ProductData[] = [
  {
    name: 'Milk',
    price: 3.97,
    uniqueId: 'milk',
    salePrice: { quantity: 2, newPrice: 5.0 },
  },
  {
    name: 'Bread',
    price: 2.17,
    uniqueId: 'bread',
    salePrice: { quantity: 3, newPrice: 3 },
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
