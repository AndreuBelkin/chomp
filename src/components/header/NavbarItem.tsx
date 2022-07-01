import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface INavbarItemProps {
  children: string;
}

const NavbarItem: FC<INavbarItemProps> = ({ children }: INavbarItemProps) => {
  const getHref = () => {
    const href = `/${children.toLowerCase().split(" ").join("-")}`;
    if (href === "/home") return "/";
    return href;
  };
  return (
    <NavLink to={getHref()} className='navigation__item'>
      {children}
    </NavLink>
  );
};

export default NavbarItem;
