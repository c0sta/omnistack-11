import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Login, Register, Profile, NewIncident } from "../pages/index";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </HashRouter>
  );
}
