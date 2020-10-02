import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from './App';
import ErrorBoundry from "./error-boundry"

import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

