const base  = require('../base/base'),
      files = require('../base/files'),
      path  = require('path');
module.exports = {
  alias     : {
		'static': path.resolve(files.staticPath),
    'utils': path.resolve(files.appPath, 'utils/index.js'),
    'css': path.resolve(files.cssPath, 'index.' + base.cssType)
  },
  modules   : ['node_modules'],
  extensions: ['.js', '.jsx', '.json']
};