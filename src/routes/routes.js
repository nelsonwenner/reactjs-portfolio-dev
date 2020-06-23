import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main/Main';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;