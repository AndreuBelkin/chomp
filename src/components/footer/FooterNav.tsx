import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./FooterNav.css";

const FooterNav: FC = () => {
  return (
    <div className='footer-navigation'>
      <div className='navigation-column'>
        <h3>Company</h3>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>Order</NavLink>
        <NavLink to={"/"}>FAQ</NavLink>
        <NavLink to={"/"}>Contact</NavLink>
      </div>
      <div className='navigation-column'>
        <h3>Template</h3>
        <NavLink to={"/"}>Style Guide</NavLink>
        <NavLink to={"/"}>Changelog</NavLink>
        <NavLink to={"/"}>Licence</NavLink>
        <NavLink to={"/"}>Webflow University</NavLink>
      </div>
      <div className='navigation-column'>
        <h3>Flowbase</h3>
        <NavLink to={"/"}>More Cloneables</NavLink>
      </div>
    </div>
  );
};

export default FooterNav;
