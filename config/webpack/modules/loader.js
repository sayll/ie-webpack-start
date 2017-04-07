const base  = require('../base/base'),
      files = require('../base/files');

module.exports = (dev) => {
  let Config = {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        enforce: "pre",
        exclude: [files.staticPath],
        use: ['happypack/loader?id=ES3']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [],
        include: [files.staticPath],
        use: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [files.staticPath],
        include: [files.viewPath, files.jsPath, files.htmlPath],
        use: ['happypack/loader?id=JSX']
      },
      {
        test: /\.(html)$/,
        include: [files.htmlPath],
        use: ['happypack/loader?id=HTML']
      },
      {
        test: /\.(html)$/,
        exclude: [files.htmlPath],
        use: 'text-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        include: [files.imgPath, files.viewPath],
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 2000,
              publicPath: '/',
              name: 'assets/[name]-[hash:8].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(svg|ico|woff|eot|ttf)$/,
        include: [files.fontPath, files.viewPath],
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 1,
              publicPath: '/',
              name: 'assets/[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  };

  function cssLoader(test, loader, path = [files.viewPath, files.cssPath]) {
    Config.rules.push({ // 独立CSS文件
      test: test, // 标准的CSS编译
      include: path,
      loaders: require('extract-text-webpack-plugin').extract({
        fallback: 'style-loader',
        use: loader ? [{
            loader: 'css-loader',
            query: {
              modules: false,
              outputStyle: 'expanded',
              sourceMap: dev,
              sourceMapContents: dev
            }
          }, loader, 'postcss-loader'] : [{
            loader: 'css-loader',
            query: {
              modules: false,
              outputStyle: 'expanded',
              sourceMap: dev,
              sourceMapContents: dev
            }
          }, 'postcss-loader']
      })
    })
  }

  cssLoader(/\.(css|pcss)$/, false);
  cssLoader(/\.(sass|scss)$/, 'sass-loader');
  cssLoader(/\.(less)$/, 'less-loader');

  return Config;
};