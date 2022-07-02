import React, { FC } from "react";
import Logo from "../Logo";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-line'>
          <div className='footer-box'>
            <Logo />
            <p>Takeaway & Delivery template for small - medium businesses.</p>
          </div>
          <div className='footer-box'>
            <nav>Навигация</nav>
          </div>
        </div>
        <div className='footer-line'>
          <p>Built by Flowbase · Powered by Webflow</p>
          <div className='socual-media'>
            <img src='' alt='Instagram' />
            <img src='' alt='Twitter' />
            <img src='' alt='YouTube' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
