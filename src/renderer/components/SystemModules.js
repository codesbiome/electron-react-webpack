import React from 'react';

const SystemModules = ({ modules }) => {
  return (
    <ul>
      {Object.keys(modules).map(key => {
        return (
          <li key={key}>
            {key} - {modules[key]}
          </li>
        );
      })}
    </ul>
  );
};

export default SystemModules;
