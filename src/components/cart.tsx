import React, { useEffect, useState, useReducer } from "react";
import headphone from "../images/console.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsBagPlusFill, BsBagDashFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { CartActionKind, cartReducer, initialState, IProduct, TProduct } from "./reducer/productReducer";
import { useShoppingCart } from "./context/shoppingCartContext";
import { Stack } from "react-bootstrap";
import { CartItem } from "./cartItems";
import { formatCurrency } from "../utils/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
  store: IProduct
}

// type cartStateProps = {

// }
const Cart = ({isOpen, store}: ShoppingCartProps) => {
  // const [state, dispatch] = useReducer(cartReducer, initialState);
//   const [product, setProducts] = useState<IProduct>({
//   products: [],
//   totalPrice:0
// });
const {state, addProductToCart, closeCart} = useShoppingCart()

const {totalPrice, products} = state

console.log(isOpen)

// console.log(product)
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Stack gap={3}>
          {state.products.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total: {formatCurrency(state.totalPrice)}
          </div>
        </Stack>
        </Offcanvas.Body>
      </Offcanvas>
  );
};

export default Cart;
