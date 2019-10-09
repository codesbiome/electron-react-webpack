import React from 'react';
import SystemModules from './SystemModules';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <h3 className="headline">
        Made with <span className="heart">❤️</span> and chanting mantra 🙏 of success
      </h3>
      <div className="modules">
        <h3>Ingredients Information</h3>
        <SystemModules modules={window['modulesInUse']} />
      </div>
      <div className="switch">
        <Link to="/about">About Me</Link>
      </div>
    </div>
  );
};

export default Home;
