const webpack        = require('webpack'),
			files        	 = require('./base/files'),
			merge          = require('webpack-merge'),
      WebpackMd5Hash = require('webpack-md5-hash'),
      Visualizer     = require('webpack-visualizer-plugin')
      CopyPlugin     = require('copy-webpack-plugin');
let config = require('./webpack.config.js')({ dev: false });

/** --------------------
 * 打包资源，性能分析
 * */
if (process.env.NODE_TEST === 'production') {
  config.plugins.push(
    new Visualizer({
      filename: './statistics.html'
    })
  )
}

module.exports = merge(config, {
  plugins: [
    new WebpackMd5Hash(),
		// 复制静态地址文件
		new CopyPlugin([
			{
				from: files.staticPath,
				to: files.buildPath,
				ignore: ['.*']
			}
		]),
  ]
});