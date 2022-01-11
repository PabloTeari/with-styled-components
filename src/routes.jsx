import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import MapPage from "pages/Map";
import Home from "pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MapPage} path="/map" />
        <Route exact component={Home} path="*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
