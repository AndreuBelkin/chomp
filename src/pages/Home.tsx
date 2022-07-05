import React, { FC } from "react";
import About from "../components/sections/About";
import HowItWork from "../components/sections/HowItWork";
import Intro from "../components/sections/Intro";
import Menu from "../components/sections/Menu";
import Order from "../components/sections/Order";
import MenuCard from "../store/slices/menu/MenuCard";
import "./Home.css";

const Home: FC = () => {
  return (
    <main className='main'>
      <Intro />
      <About />
      <HowItWork />
      <Menu />
      <Order />
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
