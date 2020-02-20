import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
// Pages
import Home from './pages/home/home';
import Gameover from './pages/gameover/gameover';
import Formulario from './pages/formulario/formulario';
import EnvioCorreo from './pages/verificacion/envioCorreo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gameover" component={Gameover} />
        <Route path="/formulario" component={Formulario} />
        <Route path="/envio-correo" component={EnvioCorreo} />
      </Switch>
    </Router>
  );
}

export default App;
