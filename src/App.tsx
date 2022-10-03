import React from "react";
import "./App.css";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { ShoppingCartProvider } from "./components/context/shoppingCartContext";

function App() {
  return (
   
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}

export default App;
