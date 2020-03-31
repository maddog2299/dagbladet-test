import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './pages/Main/Main';
import Error from './pages/Error/Error';
import ListView from './pages/ListView/ListView';
import * as serviceWorker from './serviceWorker';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/list-view" >
          <ListView />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
