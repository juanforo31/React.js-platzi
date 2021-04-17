import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Badges from "../paginas/Badges";
import Nuevo_Badge from "../paginas/Nuevo_Badge";
import Badge_Home from "../paginas/Badge_Home";
import NotFound from "../paginas/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Badge_Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={Nuevo_Badge} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
