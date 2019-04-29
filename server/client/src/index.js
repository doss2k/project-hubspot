import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import App from "./components/App";
import "./static/css/style.css";
import reducers from "./reducers";

// create redux store
const storeWithMiddleware = applyMiddleware(promise)(createStore);
const app = (
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
