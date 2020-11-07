(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('ms')) :
	typeof define === 'function' && define.amd ? define(['ms'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wait = factory(global.ms));
}(this, (function (ms) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var ms__default = /*#__PURE__*/_interopDefaultLegacy(ms);

	var index = (time) => new Promise((res) => setTimeout(res, ms__default['default'](time.toString())));

	return index;

})));
