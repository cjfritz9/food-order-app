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
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems: any;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems: any;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item: any) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
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
