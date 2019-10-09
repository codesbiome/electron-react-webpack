import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import SystemModules from './components/SystemModules';
import { getStatic } from './helpers';

const App = () => {
  return (
    <HashRouter>
      <div>
        <div className="jumbo">
          <img className="logo" src={getStatic('app.ico')} />
          <h1>
            My <span>Electron</span> App
          </h1>
        </div>

        <Switch>
          <Route path="/about">
            <div>
              <p className="headline about">
                Once upon a time there was a little prick who wanted to create
                <br />a basic application using ElectronJS, React and Webpack.
                <br />
                After struggling for hours in search of a decent boilerplate
                <br />
                he couldn't find any good results to begin with...
                <br />
                <br />
                His morale was down, with a sad face he decided to go to bed...
                <br />
                But then on next morning, he got up and planned to waste
                <br />
                another day of his life just to write the boilerplate code himself.
                <br />
                <br />
                After investing plenty of hours, the result was heart-warming
                <br />
                "Keep your hopes higher than morale!"
              </p>
              <div className="switch">
                <Link to="/">Go back</Link>
              </div>
            </div>
          </Route>

          <Route path="/">
            <div>
              <h3 className="headline">
                Made with <span className="heart">❤️</span> and chanting mantra 🙏
              </h3>
              <div className="modules">
                <h3>Ingredients Information</h3>
                <SystemModules modules={window['modulesInUse']} />
              </div>
              <div className="switch">
                <Link to="/about">About Me</Link>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
