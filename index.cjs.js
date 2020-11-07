'use strict';

var ms = require('ms');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ms__default = /*#__PURE__*/_interopDefaultLegacy(ms);

var index = (time) => new Promise((res) => setTimeout(res, ms__default['default'](time.toString())));

module.exports = index;
