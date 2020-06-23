import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';

import Home from './components/Home';
import Exp from './components/Experience';
import Act from './components/Activities';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/exp" exact component={Exp} />

          <Route path="/act" exact component={Act} />
        </Switch>
      </Router>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);