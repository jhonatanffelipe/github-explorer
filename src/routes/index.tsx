/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashborad from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashborad} />
    <Route path="/repository" exact component={Repository} />
  </Switch>
);

export default Routes;
