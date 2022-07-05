import React, { FC } from "react";
import Button from "../common/Button";
import "./Order.css";

const Order: FC = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-order'>
          <div className='order-content'>
            <img
              src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa379a976b602_Phones.png'
              alt=''
            />
            <img
              src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3241b76b605_Content%20Pattern.svg'
              className='img-absolute'
            />
          </div>
          <div className='order-content'>
            <h2>Order online with our simple checkout.</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500.
            </p>
            <Button>See our FAQ</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
