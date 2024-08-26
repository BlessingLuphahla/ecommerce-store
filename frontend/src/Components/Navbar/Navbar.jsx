import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/axe-logo.jpg";
import cart from "../assets/svgs/cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>REDD SHOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link className="nav-link" to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link className="nav-link" to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link className="nav-link" to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link className="nav-link" to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link className="nav-link" to="/login">
          <button>Login</button>
        </Link>
        <div className="cart-img">
          <Link className="nav-link" to="/cart">
            <img src={cart} alt="shopping cart" />
          </Link>
        </div>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
