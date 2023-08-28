import React, { useReducer } from 'react';

export interface CartInterface {
  items: any[];
  totalAmount: number;
  addItem: (item: any) => void;
  removeItem: (id: any) => void;
}

interface Props {
  children: React.ReactNode;
}

export const CartContext = React.createContext<CartInterface | null>(null);

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    console.log(state.total, action.item.price, action.item.amount)
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    };
  }
  return defaultCartState;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItemToCart = (item: any) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const handleRemoveItemFromCart = (id: any) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItemToCart,
        removeItem: handleRemoveItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
