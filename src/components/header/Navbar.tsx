import React, { FC } from "react";
import NavbarItem from "./NavbarItem";
import ShoppingCart from "../../store/slices/shopping/ShoppingCart";

const Navbar: FC = () => {
  const navbarItems = ["Home", "Order", "Company", "FAQ", "Contact"];

  const renderItems = () => {
    return navbarItems.map((item, index) => <NavbarItem key={index}>{item}</NavbarItem>);
  };

  return (
    <div className='navigation content'>
      <div className='content navigation-content'>{renderItems()}</div>
      <ShoppingCart />
    </div>
  );
};

export default Navbar;
