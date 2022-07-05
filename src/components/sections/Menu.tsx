import React, { FC, useState } from "react";
import MenuCard from "../../store/slices/menu/MenuCard";
import { getMenu } from "../../store/slices/menu/menuSlice";
import store from "../../store/store";
import Button from "../common/Button";
import "./Menu.css";

const Menu: FC = () => {
  const [group, setGroup] = useState("burgers");
  const menuItems = getMenu(store.getState());
  const renderMenu = (group: string) => {
    const groupItems = menuItems.filter((item) => item.category === group);
    return groupItems.map((item, index) => <MenuCard item={item} key={index} />);
  };
  return (
    <section className='section'>
      <div className='menu'>
        <h2 className='menu__title'>Browse our menu</h2>
        <div className='order'>
          <div className='container'>
            <p className='order-description'>
              Use our menu to place an order online, or phone our store to place a pickup order. Fast and fresh food.
            </p>
            <div className='menu-buttons'>
              <Button clickHandler={() => setGroup("burgers")}>Burgers</Button>
              <Button clickHandler={() => setGroup("sides")}>Sides</Button>
              <Button clickHandler={() => setGroup("drinks")}>Drinks</Button>
            </div>
            <div className='menu-content'>{renderMenu(group)}</div>
            <Button href='/order'>See Full Menu</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
