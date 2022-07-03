import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

interface IButtonProps {
  children: string;
  className?: string;
  href?: string;
  clickHandler?: () => void;
}

const Button: FC<IButtonProps> = ({ children, className, href, clickHandler }: IButtonProps) => {
  const styleButton = "button " + className ?? "button";
  if (href)
    return (
      <NavLink to={href} className={styleButton}>
        {children}
      </NavLink>
    );
  return (
    <p className={styleButton} onClick={clickHandler}>
      {children}
    </p>
  );
};

export default Button;
