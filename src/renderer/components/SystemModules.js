import React from 'react';

const SystemModules = ({ modules }) => {
  return (
    <ul>
      {Object.keys(modules).map(key => {
        return (
          <li key={key}>
            <span className="name">{key}</span>
            <span className="version">{modules[key]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SystemModules;
