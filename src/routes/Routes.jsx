import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Main from "../pages/Main/Main";

import { Provider } from "react-redux";
import store from "../store/store";

const Routes = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </Provider>
  );
};

export default Routes;
