import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { getStatic } from './helpers';
import { About, Home } from './components';

const App = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <div className="jumbo">
          <img className="logo" src={getStatic('app.ico')} />
          <h1>
            <span>Electron</span>-React-Webpack
          </h1>
        </div>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
