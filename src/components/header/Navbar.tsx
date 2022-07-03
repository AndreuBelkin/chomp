import React, { FC } from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import ShoppingCart from "../../store/slices/shopping/ShoppingCart";

const Navbar: FC = () => {
  const navbarItems = ["Home", "Order", "Company", "FAQ", "Contact"];

  const renderItems = () => {
    return navbarItems.map((item, index) => <NavbarItem key={index}>{item}</NavbarItem>);
  };

  return (
    <div className='navigation'>
      <div className='navigation-bar'>{renderItems()}</div>
      <ShoppingCart />
    </div>
  );
};

export default Navbar;
