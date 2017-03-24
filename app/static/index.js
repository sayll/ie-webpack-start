/**
 * 基础补丁包
 * */
require('./patch/console');
require('es6-promise/auto');

/**
 * 功能扩展包
 * */
window.$ = require('./tools/jquery.min');
require('avalon2');
