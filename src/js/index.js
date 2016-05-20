import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import VisibleTodos from './containers/VisibleTodos.js'
import SelectedTodoDetail from './containers/SelectedTodoDetail.js'

import configureStore from './configureStore'

const initialStoreState = {}

let store = configureStore(initialStoreState);
window.store = store; // for debugging only

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/todos" component={VisibleTodos} />
      <Route path="/todos/:id" component={SelectedTodoDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

