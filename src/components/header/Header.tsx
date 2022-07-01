import React, { FC } from "react";
import "./Header.css";
import NavbarItem from "./NavbarItem";

const Header: FC = () => {
  return (
    <header className='header container'>
      <p>Logo</p>
      <NavbarItem>Home</NavbarItem>
    </header>
  );
};

export default Header;
