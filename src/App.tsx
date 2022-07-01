import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <div className='app'></div>;
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
