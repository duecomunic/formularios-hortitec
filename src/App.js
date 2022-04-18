import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Formulario3 } from "./pages/Formulario3";
import { Formulario1 } from "./pages/Formulario1";
import { Formulario2 } from "./pages/Formulario2";
import { Formulario5 } from "./pages/Formulario5";

import "antd/dist/antd.css";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/formulario-1" exact component={Formulario1} />
      <Route path="/formulario-2" exact component={Formulario2} />
      <Route path="/formulario-3" exact component={Formulario3} />
      <Route path="/formulario-5" exact component={Formulario5} />
    </Switch>
  </BrowserRouter>
);

export default App;
