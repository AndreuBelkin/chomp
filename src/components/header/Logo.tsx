import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Logo: FC = () => {
  return (
    <NavLink to={"/"} className='logo'>
      <img
        src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa341ab76b5e7_Logo.svg'
        alt='logo'
      />
    </NavLink>
  );
};

export default Logo;
