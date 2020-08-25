import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Root from "views/Root/Root";
var hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </Router>
  );
}

export default App;
