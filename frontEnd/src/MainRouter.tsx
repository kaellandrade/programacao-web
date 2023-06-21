import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cedulas_Moedas from './pages/cedulas-moedas/index';

function MainRouter() {
  return (
    <BrowserRouter>
      <Route component = { Cedulas_Moedas }  path="/" exact />
      <Route component = { Cedulas_Moedas }  path="/" exact />
    </BrowserRouter>
  );
}

export default MainRouter;