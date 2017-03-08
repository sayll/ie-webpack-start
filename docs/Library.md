# Library

## 说明

例子：引入Jquery 或 avalon
1. 首先寻找兼容IE版本的Jquery
2. 将库文件存入 [`app/static/tools`](/app/static/tools)
3. 通过[`app/static/index.js`](/app/static/index.js)引入库文件
```js
window.$ = require('./tools/jquery.min');
require('avalon2');
```

注意：引包只能通过`require`形式,否则无法正常打包;（兼容低版本IE做出的牺牲之一）



