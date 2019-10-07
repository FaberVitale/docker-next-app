const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// @see {@link https://github.com/facebook/create-react-app/issues/637}
const ROOT_DIR = fs.realpathSync(process.cwd());

module.exports = {
  ROOT_DIR,
  BUILD_DIR: path.resolve(ROOT_DIR, 'build'),
  CLIENT_DIR: path.resolve(ROOT_DIR, 'app'),
  SERVER_DIR: path.resolve(ROOT_DIR, 'server'),
};
