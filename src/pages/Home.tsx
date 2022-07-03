import React, { FC } from "react";
import About from "../components/sections/About";
import HowItWork from "../components/sections/HowItWork";
import Intro from "../components/sections/Intro";
import "./Home.css";

const Home: FC = () => {
  return (
    <main className='main'>
      <Intro />
      <About />
      <HowItWork />
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
