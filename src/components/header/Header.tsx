import React, { FC } from "react";
import "../../styles/Header.css";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className='header content container'>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
