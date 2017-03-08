# ie-webpack-start
[![Coverage Status](https://travis-ci.org/sayll/ie-webpack-start.svg?branch=master)](https://travis-ci.org/sayll/ie-webpack-start)  [![Coverage Status](https://coveralls.io/repos/github/sayll/ie-webpack-start/badge.svg)](https://coveralls.io/github/sayll/ie-webpack-start) [![Coverage Status](https://codeclimate.com/github/sayll/ie-webpack-start/badges/gpa.svg)](https://codeclimate.com/github/sayll/ie-webpack-start)

<b>IE 9+ 用户请转至：[avalon-webpack-start](https://github.com/sayll/avalon-webpack-start)</b>

<b>React 用户请转至：[react-webpack-start](https://github.com/sayll/react-webpack-start)</b>
## 介绍

这个一个为打包支持到低版本的`webpack2`实验性脚手架。</br>
本项目使用[`avalon2`](https://github.com/RubyLouvre/avalon)作为演示框架。

下面是非常！非常！！非常！！！重要的事情！！！</br>
此项目无法在低版本IE下启动服务实时测试，必须通过打包才知道测试结果。</br>
所以请用户自行在其他浏览器编写测试，最后回跑测试打包的IE</br>
由于代码压缩导致无法在IE下正常运行，本版本取消代码压缩功能。如有使用如Jquery第三方库的同学，最好自行引用它的min版本，而不是通过打包形式。

<b>[更多介绍...](/docs/README.md)</b>

## 开始

### 环境配置
1. 安装新版：[node.js](https://nodejs.org/)
2. 安装新版：[git](https://git-scm.com/)

### 依赖配置
确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ git clone https://github.com/sayll/ie-webpack-start.git
$ cd ie-webpack-start
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

如果一切顺利,就能正常打开端口:[http://localhost:3000/](http://localhost:3000/)

开发过程中，你用得最多的会是`npm start`。

但是这里还有很多其它的处理：


|`npm run <script>`|解释|
|------------------|-----------|
|`start`|启动3000端口服务，代码热替换开启。|
|`build`|单纯打包资源，不会进行代码测试。|
|`deploy`|删除旧文件，进行代码测试，打包相关文件（默认目录~/build）。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`visualizer`|打包资源分析|
|`clean`|清除打包的文件|
|`cnpm`|替换为淘宝镜像|
* 开发使用 `start`
* 调试IE使用 `build`
* 发布使用`deploy`


## 使用手册

### 流程

基本

1. 位于[`app/html`](/app/html)创建HTML视图【[更多说明](/docs/basics/Html.md)】
2. 位于[`app/view`](/app/view)配置html相关的JS和CSS文件。(JS和CSS需与HTML保持一致，可参考现有模版)【[更多说明](/docs/basics/Views.md)】

高级

1. 引用字体图标Icon【[更多说明](/docs/basics/Icon.md)】
2. 使用框架(avalon)或库(jquery)【[更多说明](/docs/Library.md)】
3. 设置全局变量。【[更多说明](/docs/basics/Common.md)】
4. 使用Css预处理器([更多说明](/docs/loaders))
5. 使用CDN([更多说明](/docs/webpack))
6. 修改目录结构([更多说明](/docs/webpack))
7. 单元测试([更多说明](/docs/webpack/Tests.md))

发布

1. 打包说明【[更多说明](/docs/webpack/BasePack.md)】


## 目录说明

```
.
├── build                    # 所有打包配置项
├── config                   # 项目配置文件
│   ├── webpack              # webpack配置文件夹
│   └── karma.conf.js        # karma配置文件
├── server                   # Express 程序 (使用 webpack 中间件)
│   └── main.js              # 服务端程序入口文件
├── app                      # 程序源文件
│   ├── html                 # 多页或单页应用的入口HTML
│   └──  source               # 公共的资源文件
│   ├    ├── css
│   ├    ├── js
│   ├    ├── font
│   ├    └──  img             
│   ├── static               # 公共的静态资源文件(所有内部文件通过index.js引入，可配置全局变量。)
│   └── view                 # 主路由和异步分割点
│       └── index            # 匹配html文件夹中的index.html。（css,js文件名对应文件夹名，可直接打包无需单独引入）
│           ├── index.js     # 直接与index.html匹配的入口文件，可以作为单页应用的入口，在内部定义自己的项目目录
│           ├── index.css    # 如是多页应用，可设置对应的CSS文件，直接匹配。
│           └── other **     # 页面的其他资源文件，通过index.js引入
└── tests                    # 单元测试
```

## 更新日志

[更新详情](/docs/Update.md)

## 最重要的事情

* 亲不要吝啬自己的**Star**，先右上角**Star**一下呗！

<a href="https://segmentfault.com/a/1190000008249713"><img src='https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=405cc666d543ad4ba67b4ec6b2327697/d058ccbf6c81800a80b7b2cdb53533fa838b47a6.jpg' height='160'></a>

