# 具体介绍

### 关于【Webpack】
1. 服务端使用`Express`。需要注意的是，只有一个目的那就是提供了`webpack-dev-middleware` 和 `webpack-hot-middleware`（代码热替换）。使用自定义的`Express`程序替换[webpack-dev-server](https://github.com/webpack/webpack-dev-server)，让它更容易实现universal 渲染和为了不使这个包过于庞大。
2. 针对不同的loader采用了多线程编译，极大的加快了编译速度。
3. 启动新技术tree-shaking
4. 可用ES6编译低版本IE代码【水有多深不得而知】
5. 提供测试框架进行单元测试，代码覆盖率报告，可与[Travis-ci](https://travis-ci.org)和[Coveralls](https://coveralls.io)快速对接。【[配置说明](https://github.com/sayll/Sayll_Karma)】
6. Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化。

### 关于【Css】
1. css的模块化，预处理器的编译。（[支持`sass,scss,less,postcss`](/docs/loaders)）
2. 针对低版本浏览器和其他浏览器内核的特殊性，启用[autoprefixer](https://github.com/postcss/autoprefixer)自动添加浏览器前缀
3. 可导入字体和字体图标，操作非常简单。（如[阿里系icon](http://www.iconfont.cn/)）【[配置文档](/docs/basics/Icon.md)】
4. 防缓存的hash规则

### 关于【Js】
1. 支持ES5,ES5编写逻辑代码
2. 由于兼容性问题只可使用AMD规范的`require`,无法使用 `import` 和 `export`
3. 防缓存的hash规则
4. 快速编译，自动刷新。

### 关于【Html】
1. 支持单页应用和多页应用的混合开发。
2. 自动引入页面的CSS和JS文件。无需手动设置URL。(所有文件hash的改变都会导致文件名改变,这里的资源引用全由内部自动完成)