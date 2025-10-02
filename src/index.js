/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-most";
import appReducer from "./store/app.reducer";
import appEpic from "./store/app.epics";
import Navigation from "./navigation/index";

import "assets/css/material-dashboard-react.css?v=1.10.0";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(appEpic);
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </BrowserRouter>
);
