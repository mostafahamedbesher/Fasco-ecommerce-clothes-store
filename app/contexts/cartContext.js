"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

const localStorageKey = "fasco-cart";

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
    case "cart/getDataFromLocalStr":
      return { ...state, cart: action.payload };
    default:
      return intialState;
  }
}

//context Api
const cartContext = createContext();

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, intialState);
  const isMounted = useRef(true);

  // handle local storage
  useEffect(
    function () {
      // run only on mount
      if (isMounted.current) {
        // get cart data from local storage
        const cartData = JSON.parse(localStorage.getItem(localStorageKey));
        if (cartData) {
          dispatch({ type: "cart/getDataFromLocalStr", payload: cartData });
        }
        // change flag value
        isMounted.current = false;
      } else {
        //update local storage when cart changes
        localStorage.setItem(localStorageKey, JSON.stringify(cart));
      }
    },
    [JSON.stringify(cart)],
  );

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
