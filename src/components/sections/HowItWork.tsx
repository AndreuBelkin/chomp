import React, { FC } from "react";
import "./HowItWork.css";

const HowItWork: FC = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='how-it-work'>
          <h2 className='how-it-work__title'>How it works.</h2>
          <div className='how-it-work-content'>
            <div className='content-card'>
              <img
                src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3dc2276b60f_Step%2001.png'
                alt=''
                className='content-card__img'
              />
              <h3 className='content-card__title'>Adapt your menu items</h3>
              <p className='content-card__text'>
                Easily adapt your menu using the webflow CMS and allow customers to browse your items.
              </p>
            </div>
            <div className='content-card'>
              <img
                src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3e5bf76b60e_Step%2002.png'
                alt=''
                className='content-card__img'
              />
              <h3 className='content-card__title'>Accept online orders & takeout</h3>
              <p className='content-card__text'>
                Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.
              </p>
            </div>
            <div className='content-card'>
              <img
                src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3001a76b610_Step%2003.png'
                alt=''
                className='content-card__img'
              />
              <h3 className='content-card__title'>Manage delivery or takeout</h3>
              <p className='content-card__text'>
                Manage your own logistics and take orders simply through the ecommerce system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
