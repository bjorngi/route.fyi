import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { RouteView } from 'containers/RouteView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RouteView} />
    <Route path="list" component={List} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
