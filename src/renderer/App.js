import React from 'react';
import SystemModules from './components/SystemModules';

const App = () => {
  return (
    <div>
      <div className="jumbo">
        <img className="logo" src="./app.ico" />
        <h1>
          My <span>Electron</span> App
        </h1>
      </div>

      <h3 className="headline">
        Made with <span className="heart">❤️</span> and chanting mantra 🙏
      </h3>
      <div className="modules">
        <h3>Ingredients Information</h3>
        <SystemModules modules={window['modulesInUse']} />
      </div>
    </div>
  );
};

export default App;
