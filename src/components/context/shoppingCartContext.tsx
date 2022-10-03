import React, {
  createContext, ReactNode, useContext, useReducer, useState,} from "react";
import {
  CartActionKind, CartItem, cartReducer, IProduct, TProduct,} from "../reducer/productReducer";
import ShoppingCart from "../cart";
import Cart from "../cart";

/* Initial State */

const initialState = {
  totalPrice: 0,
  products: [],
} as IProduct;

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  addProductToCart: (item: TProduct) => void;
  increaseCartQuantity: (item: TProduct) => void;
  decreaseCartQuantity: (item: TProduct) => void;
  removeProductFromCart: (item: TProduct) => void;
  state: IProduct;
  isOpen: boolean;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
/* Cart-Provider Component */
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle cart
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addProductToCart = (item: TProduct) => {
    return dispatch({
      type: CartActionKind.ADDTOCART,
      payload: {
        product: item,
        full: false,
      },
    });
  };

  const increaseCartQuantity = (item: TProduct) => {
    return dispatch({
      type: CartActionKind.ADDTOCART,
      payload: {
        product: item,
        full: false,
      },
    });
  };

  const removeProductFromCart = (item: TProduct) => {
    return dispatch({
      type: CartActionKind.REMOVEFROMCART,
      payload: {
        product: item,
        full: true,
      },
    });
  };

  const decreaseCartQuantity = (item: TProduct) => {
    return dispatch({
      type: CartActionKind.REMOVEFROMCART,
      payload: {
        product: item,
        full: false,
      },
    });
  };

  // const clearCart = () => {
  //     return dispatch({
  //         type: 'CLEAR_CART'
  //     });
  // };

  // Context values

  return (
    <ShoppingCartContext.Provider
      value={{
        addProductToCart,
        removeProductFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        openCart,
        closeCart,
        state,
        isOpen
      }}
    >
      {children}
      <Cart isOpen={isOpen} store={state} />
    </ShoppingCartContext.Provider>
  );
}

