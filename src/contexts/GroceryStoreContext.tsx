import React, { createContext, useCallback, useContext, useState } from 'react';

import { ProductItemsMap, ProductUniqueKey } from 'common/types';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  productsMap: ProductItemsMap;
  increaseProductItem: (key: ProductUniqueKey) => void;
  decreaseProductItem: (key: ProductUniqueKey) => void;
  removeProductItem: (key: ProductUniqueKey) => void;
}

const GroceryStoreContext = createContext<ContextValue>(undefined as any);

export function GroceryStoreProvider({ children }: Props) {
  const [productsMap, setProductsMap] = useState<ProductItemsMap>(new Map());

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

  const contextValue = {
    productsMap,
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
