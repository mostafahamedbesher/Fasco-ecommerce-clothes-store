"use client";

import { act, createContext, useContext, useReducer } from "react";

const intialState = {
  cart: [],
};

//Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "cart/addItem": {
      const ItemsIds = state.cart.map((item) => item.id);
      if (ItemsIds.includes(action.payload.id)) {
        return state;
      }

      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "cart/deleteItem":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "cart/clear":
      return { ...state, cart: [] };
    case "cart/increaseItemQuantity":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        }),
      };
    case "cart/decreaseItemQuantity":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        }),
      };
    default:
      return intialState;
  }
}

//context Api
const cartContext = createContext();

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, intialState);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);

  if (context === undefined)
    throw new Error("Context was used out of Provider");

  return context;
}

export { CartProvider, useCart };
