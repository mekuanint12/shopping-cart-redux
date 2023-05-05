import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItems";

const Layout = () => {
  let total = 100;

  const showCartItems = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCartItems && <CartItem />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
