import React, { FC } from "react";
import Logo from "../header/Logo";
import "./Footer.css";
import FooterNav from "./FooterNav";
import SocialMedia from "./SocialMedia";

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-line'>
          <div className='footer-box'>
            <Logo />
            <p style={{ width: "265px", marginTop: "25px" }}>
              Takeaway & Delivery template for small - medium businesses.
            </p>
          </div>
          <div className='footer-box'>
            <FooterNav />
          </div>
        </div>
        <div className='footer-line footer-line_bottom'>
          <p style={{ fontSize: "15px" }}>
            Built by{" "}
            <a href='http://www.flowbase.co/' target='_blank' rel='noreferrer'>
              Flowbase
            </a>{" "}
            · Powered by{" "}
            <a href='https://webflow.com/' target='_blank' rel='noreferrer'>
              Webflow
            </a>
          </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
