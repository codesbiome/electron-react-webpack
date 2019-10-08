import React from 'react';
import SystemModules from './components/SystemModules';

const App = () => {
  return (
    <div>
      <h1>Welcome to Electron App!</h1>
      <h2>We are using:</h2>
      <SystemModules modules={window['modulesInUse']} />
    </div>
  );
};

export default App;
