# 常见问题
* `start`原文件启动项目失败
  1. 可能`install`依赖下载失败，导致依赖残缺
  2. 可能配置的环境版本过低，尝试更新一下node.js包
* `start`使用中启动项目失败
  1. 可能你在`app/static`文件夹中使用了Es6等不兼容IE的写法，而此目录比较特殊。只适合引入原版本兼容库。请在`app/source/js/*`书写公共逻辑代码。
* `install`依赖失败【网络问题】
  1. 首先删除原`node_modules`文件夹的残缺依赖
  2. 尝试使用`cnpm`
  ``` base
  $ npm run cnpm
  $ cnpm install
  ```
* 使用**CSS预处理器**导致启动项目失败
  1. 可能相关依赖未安装
      * 查看主文档，添加相应依赖。
  2. 可能相关依赖安装失败
      * 尝试使用`cnpm` 进行安装   
  3. 可能app文件夹内的样式文件后缀未修改了相应预处理器的后缀。
    * 默认`app/source/css`内的文件后置修改为相应的后缀。
* 引入库，导致异常。
  1. 由于兼容性问题只可使用AMD规范的`require`,无法使用 `import` 和 `export` 
  2. 引包地址必须在`app/static/index.js`中
  3. 你所引入的包，不支持低版本IE
* 引入库，但无法全局调用。
  1. 请在`app/static/index.js`中配置
    * 如`Jquery`
    
      ``` js
      window.$ = require('./tools/jquery.min');
      ```
