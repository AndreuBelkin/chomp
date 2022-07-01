import React, { FC, useEffect } from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

const Navbar: FC = () => {
  const navbarItems = ["Home", "Order", "Company", "FAQ", "Contact"];

  useEffect(() => {});
  const renderItems = () => {
    return navbarItems.map((item, index) => <NavbarItem key={index}>{item}</NavbarItem>);
  };
  return (
    <div className='navigation'>
      <div className='navigation-bar'>{renderItems()}</div>
    </div>
  );
};

export default Navbar;
