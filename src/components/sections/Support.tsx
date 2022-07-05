import React, { FC } from "react";
import Button from "../common/Button";
import "./Support.css";

const Support: FC = () => {
  return (
    <section className='section'>
      <div className='support'>
        <div className='support-content'>
          <div className='support-content__img'></div>
        </div>
        <div className='support-content content_padding'>
          <h2>
            <span>Support</span> good food and local business.
          </h2>
          <Button href='/order'>Order Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
