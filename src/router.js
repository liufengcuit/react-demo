import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './pages/login/login.js'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={IndexPage} />
        // <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;