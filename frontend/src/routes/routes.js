import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login, Register } from "../pages/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
