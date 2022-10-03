import React, { useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../data.json";
import { useShoppingCart } from "./context/shoppingCartContext";
import { TProduct } from "./reducer/productReducer";

const Products = () => {
  // const [state, dispatch] = useReducer(cartReducer, initialState);
  const {state, addProductToCart} = useShoppingCart()
  const handleAddProductToCart = (product:TProduct) => {

    addProductToCart(product)
  }
  return (
    <Container className="container mt-5">
      <Row md={2} lg={3} s={1} className="g-3 justify-center product">
        {products.map((product, key) => {
          return (
            <Col className="justify-content-around mx-auto" key={key}>
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={product.img_url}
                  className="card-img-top img-fluid"
                  alt="Product"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}-{product.price} </h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary w-100"
                  onClick={()=> handleAddProductToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
