import { ProductUniqueKey } from './types';
import { KEYED_PRODUCT_DATA } from './mock';

export const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function calculateItemPrice(key: ProductUniqueKey, quantity: number) {
  const { price: singlePrice, salePrice } = KEYED_PRODUCT_DATA[key];
  if (!salePrice) {
    return quantity * singlePrice;
  }

  const withSalePrice = Math.floor(quantity / salePrice.quantity);
  const withoutSalePrice = quantity % salePrice.quantity;
  return withSalePrice * salePrice.newPrice + withoutSalePrice * singlePrice;
}
