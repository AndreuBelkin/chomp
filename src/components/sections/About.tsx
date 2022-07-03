import React, { FC } from "react";
import Button from "../common/Button";
import "./About.css";

const About: FC = () => {
  return (
    <section className='section section_grey'>
      <div className='container'>
        <div className='about'>
          <div className='about-content about-content_bg'>
            <h2 className='content__title'>The home of fresh products</h2>
            <p className='content__text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500.
            </p>
            <Button>Learn about us</Button>
          </div>
          <div className='about-content'>
            <img
              src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3ccac76b5c6_Group%2033.png'
              alt=''
              className='content__img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
