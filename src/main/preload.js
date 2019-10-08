// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
console.log("Hello from 'preload'");

const { version: ReactVersion } = require('react');
const { version: WebpackVersion } = require('webpack');
const modulesInUse = ['chrome', 'node', 'electron', 'react', 'webpack'];

// Keep 'modules version' in 'window" object
window['modulesInUse'] = getModulesVersion(modulesInUse);

/**
 * Get Modules Version Number
 *
 * @param {array} modulesInUse
 * @return {object}   Modules with name and version
 */
function getModulesVersion(modulesInUse) {
  let result = {};

  // Loop through modules in use
  for (const type of modulesInUse) {
    let version = '';

    switch (type) {
      case 'react':
        version = ReactVersion;
        break;
      case 'webpack':
        version = WebpackVersion;
        break;
      default:
        version = process.versions[type];
    }

    result[capitalizeFirstLetter(type)] = version;
  }

  return result;
}

/**
 * Capitalize first letter of string
 *
 * @param {*} string
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
