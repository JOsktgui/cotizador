import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import {
  Home,
  AddRelatives,
  Plans,
  Thanks
} from 'pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/agregar-parientes' component={AddRelatives} />
      <Route exact path='/planes' component={Plans} />
      <Route exact path='/gracias' component={Thanks} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes;
