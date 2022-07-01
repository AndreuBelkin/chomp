import React, { FC, useState } from "react";
import store from "../../store";
import { addItem } from "./shoppingSlice";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import "./ShoppingCart.css";

const ShoppingCart: FC = () => {
  const initCoutItems = store.getState().shopping.countItems;
  const [countItems, setCountItems] = useState<number>(initCoutItems);
  store.subscribe(() => {
    setCountItems(store.getState().shopping.countItems);
  });
  return (
    <div className='shopping-cart' onClick={() => store.dispatch(addItem())}>
      <div className='shopping-cart__count'>{countItems}</div>
      <Icon path={mdiCartOutline} size={"25px"} className='shopping-cart__item' />
    </div>
  );
};

export default ShoppingCart;
