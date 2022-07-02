import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/header/footer/Footer";
import Header from "./components/header/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
