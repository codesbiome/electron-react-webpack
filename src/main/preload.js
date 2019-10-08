// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
console.log("Hello from 'preload'");

// Load system information
module.exports = function() {
  // Show version numbers for different technologies used
  window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
    };

    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type]);
    }
  });
};