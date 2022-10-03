import React, { useEffect, useState } from "react";
import Products from "./products";
import { BsCart4 } from "react-icons/bs";
import Cart from "./cart";
import { MdClose } from "react-icons/md";
import { useShoppingCart } from "./context/shoppingCartContext";
import { IProduct } from "./reducer/productReducer";

const Home = () => {
  const [data, setdata] = useState<IProduct>({
    products: [],
    totalPrice:0
  })
  const {openCart, state} = useShoppingCart()
  useEffect(()=>{
    setdata(state)
  },[state])
  return (
    <React.Fragment>
      <header className="container">
        <nav className="nav wrapper">
          <a href="#" role="logo">
           Gadget
          </a>
          <ul>
            <li> <a href="/home">Home</a> </li>
            <li> <a href="/home">Products</a> </li>
            <li> <a href="/home">About</a> </li>
            <li> <a href="/home">Shipping</a> </li>
          </ul>
          <div className="secondary_nav">
            <div className="cart_icon">
              <BsCart4 size={20} onClick={openCart} />              
            </div>
          </div>
        </nav>
      </header>
    
      <main className="products">
        <Products/>
      </main>
      
    </React.Fragment>
  );
};

export default Home;
