import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Badges from "../paginas/Badges";
import Nuevo_Badge from "../paginas/Nuevo_Badge";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={Nuevo_Badge} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
