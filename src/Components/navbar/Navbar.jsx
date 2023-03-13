import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.css";
import cart from "../../assets/images/cart.svg";
import heart from "../../assets/images/heart-icon.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const MenuLinks = () => {
  return (
    <>
      <p>
        <a href="#">Home</a>
      </p>
      <p>
        <a href="#">Shop</a>
      </p>
      <p>
        <a href="#">Blog</a>
      </p>
      <p>
        <a href="#">Sales</a>
      </p>
      <p>
        <a href="#">Contact Us</a>
      </p>
      <p>
        <a href="#">Search</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="navbar-links">
        <MenuLinks />
      </div>
      <div className="navbar-buttons">
        <p>sign in</p>
        <p>Create an Account</p>
        <img src={heart} className="heart-icon" alt="icon" />

        <div className="cart">
          <img src={cart} className="cart-icon" alt="icon" />
          <div className="cart-text">
            <p>1 Item</p>
            <p>139,000 EUR</p>
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={28}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container">
            <div className="navbar-menu-container-links">
              <MenuLinks />
            </div>
            <div className="navbar-menu-container-button">
              <p>sign in</p>
              <p>Create an Account</p>
              <img src={heart} className="heart-icon" alt="icon" />

              <div className="cart">
                <img src={cart} className="cart-icon" alt="icon" />
                <div className="cart-text">
                  <p>1 Item</p>
                  <p>139,000 EUR</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
