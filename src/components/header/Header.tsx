import React, { FC } from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className='header container'>
      <p>Logo</p>
      <Navbar />
    </header>
  );
};

export default Header;
