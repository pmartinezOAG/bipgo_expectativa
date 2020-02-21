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
import Verificacion from './pages/verificacion/verificacion';

function App() {
  return (
    <Router basename={'/bigo'}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gameover" component={Gameover} />
        <Route path="/formulario" component={Formulario} />
        <Route path="/envio-correo" component={EnvioCorreo} />
        <Route path="/verificacion" component={Verificacion} />
      </Switch>
    </Router>
  );
}

export default App;
