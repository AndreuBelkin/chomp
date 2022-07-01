import React, { FC } from "react";
import "./Header.css";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className='header container'>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
