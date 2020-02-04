import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Home, AddRelatives } from 'pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/agregar-parientes' component={AddRelatives} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes;
