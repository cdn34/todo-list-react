import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import TodoList from './containers/TodoList';// eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoList}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);