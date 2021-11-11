import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ProductItemsMap, ProductUniqueKey } from 'common/types';
import { KEYED_PRODUCT_DATA } from 'common/mock';
import { calculateItemPrice } from 'common/utils';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  productsMap: ProductItemsMap;
  totalPrice: number;
  savings: number;
  increaseProductItem: (key: ProductUniqueKey) => void;
  decreaseProductItem: (key: ProductUniqueKey) => void;
  removeProductItem: (key: ProductUniqueKey) => void;
}

const GroceryStoreContext = createContext<ContextValue>(undefined as any);

export function GroceryStoreProvider({ children }: Props) {
  const [productsMap, setProductsMap] = useState<ProductItemsMap>(new Map());
  const [totalPrice, setTotalPrice] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    let newPrice = 0;
    let withoutDiscountPrice = 0;
    productsMap.forEach((quantity, key) => {
      const { price: singlePrice } = KEYED_PRODUCT_DATA[key];
      withoutDiscountPrice += quantity * singlePrice;
      newPrice += calculateItemPrice(key, quantity);
    });
    setTotalPrice(newPrice);
    setSavings(withoutDiscountPrice - newPrice);
  }, [productsMap]);

  const increaseProductItem = useCallback((key: ProductUniqueKey) => {
    setProductsMap((old) => {
      const newMap = new Map(old);
      const quantity = old.get(key);
      if (quantity === undefined) {
        newMap.set(key, 1);
      } else {
        newMap.set(key, quantity + 1);
      }
      return newMap;
    });
  }, []);

  const decreaseProductItem = useCallback((key: ProductUniqueKey) => {
    setProductsMap((old) => {
      const newMap = new Map(old);
      const quantity = old.get(key);
      if (quantity === undefined) {
        return old;
      }
      if (quantity === 1) {
        newMap.delete(key);
      } else {
        newMap.set(key, quantity - 1);
      }
      return newMap;
    });
  }, []);

  const removeProductItem = useCallback((key: ProductUniqueKey) => {
    setProductsMap((old) => {
      const newMap = new Map(old);
      const hasDeleted = newMap.delete(key);
      if (hasDeleted) {
        return newMap;
      }
      return old;
    });
  }, []);

  const contextValue: ContextValue = {
    productsMap,
    totalPrice,
    savings,
    increaseProductItem,
    decreaseProductItem,
    removeProductItem,
  };

  return (
    <GroceryStoreContext.Provider value={contextValue}>
      {children}
    </GroceryStoreContext.Provider>
  );
}

export function useGroceryStoreContext() {
  return useContext(GroceryStoreContext);
}
