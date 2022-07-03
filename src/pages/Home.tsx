import React, { FC } from "react";
import "./Home.css";

const Home: FC = () => {
  return (
    <main className='main'>
      <section className='section'>
        <div className='container'>First section</div>
      </section>
      <section className='section section_grey'>
        <div className='container'>About section</div>
      </section>
      <section className='section'>
        <div className='container'>How it work section</div>
      </section>
      <section className='section'>
        <div className='container'>Menu section</div>
      </section>
      <section className='section'>
        <div className='container'>Order section</div>
      </section>
      <section className='section section_grey'>
        <div className='container'>Call section</div>
      </section>
      <section className='section'>
        <div className='container'>Support section</div>
      </section>
    </main>
  );
};

export default Home;
