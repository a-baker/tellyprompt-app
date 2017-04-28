import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { get } from 'axios';

import Favourites from './components/Favourites';
import Popular from './components/Popular';
import Search from './components/Search';
import Info from './components/Info';
import Signout from './components/Signout';
import Layout from './components/Layout';
import Homepage from './components/Homepage';

import style from './css/style.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage} />
      <Route path="favourites" component={Favourites} />
      <Route path="popular" component={Popular} />
      <Route path="search" component={Search} />
      <Route path="info" component={Info} />
      <Route path="signout" component={Signout} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
