import React, { FC } from "react";
import Button from "../common/Button";
import "./Intro.css";

const Intro: FC = () => {
  return (
    <section className='section header-section'>
      <div className='container'>
        <div className='intro'>
          <div className='intro-content'>
            <h1 className='content__title'>
              Beautiful food & takeaway, <span className='text_primary'>delivered</span> to your door.
            </h1>
            <p className='content__text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500.
            </p>
            <Button href='/order'>Place an Order</Button>
            <div className='review'>
              <img
                src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3a3f976b5c3_trustpilot-logo.svg'
                className='review__logo'
                alt='reviwe-logo'
              />
              <p className='review__text'>
                <span className='text_primary'>4.8 out of 5</span> based on 2000+ reviews
              </p>
            </div>
          </div>
          <div className='intro-content'>
            <img
              src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa395f376b5c1_Hero%20Image.png'
              alt='Food Delivery'
              className='content__img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
