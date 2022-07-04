import React, { FC } from "react";
import Button from "../../../components/common/Button";
import store from "../../store";
import { getMenu } from "./menuSlice";
import "./MenuCard.css";
import { IMenu } from "./menuList";

interface IMenuCardProps {
  item: IMenu;
}

const MenuCard: FC<IMenuCardProps> = ({ item }: IMenuCardProps) => {
  return (
    <div className='menu-card'>
      <div className='menu-card-content'>
        <img src={item.img} alt='' className='menu-card__img' />
      </div>
      <div className='menu-card-content'>
        <div className='menu-content-title'>
          <h3 className='menu-content-title__name'>{item.name}</h3>
          <p className='menu-content-title__price text_primary'>$ {item.price.toFixed(2)} USD</p>
        </div>
        <p className='menu-content__description'>{item.description}</p>
        <div className='menu-content-form'>
          <input type='number' />
          <Button className='button_order'>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
