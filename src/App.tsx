import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/common/Button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' />
        </Routes>
        <Button>Button</Button>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
