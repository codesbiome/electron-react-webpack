const path = require('path');
const url = require('url');

const isDev = process.env.NODE_ENV !== 'production';

// see https://github.com/electron-userland/electron-webpack/issues/99#issuecomment-459251702
export function getStatic(val) {
  if (isDev) {
    return url.resolve(window.location.origin, val);
  }
  // @ts-ignore
  return path.resolve(__static, val);
}
