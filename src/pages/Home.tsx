import React, { FC } from "react";
import About from "../components/sections/About";
import Call from "../components/sections/Call";
import HowItWork from "../components/sections/HowItWork";
import Intro from "../components/sections/Intro";
import Menu from "../components/sections/Menu";
import Order from "../components/sections/Order";
import Support from "../components/sections/Support";
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
      <Call />
      <Support />
    </main>
  );
};

export default Home;
