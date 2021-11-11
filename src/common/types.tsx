export type ProductUniqueKey = 'milk' | 'bread' | 'banana' | 'apple';

export type ProductItemsMap = Map<ProductUniqueKey, number>;

export interface ProductData {
  name: string;
  price: number;
  uniqueId: ProductUniqueKey;
  salePrice: {
    quantity: number;
    newPrice: number;
  } | null;
}
