// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
console.log("Hello from 'preload'");

const { version: ReactVersion } = require('react');
const { version: WebpackVersion } = require('webpack');
const modulesInUse = ['chrome', 'node', 'electron', 'react', 'webpack'];

// Show version numbers for different technologies used
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

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

    replaceText(`${type}-version`, version);
  }
});
