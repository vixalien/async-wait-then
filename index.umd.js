(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wait = factory());
}(this, (function () { 'use strict';

	var ms = require('ms');
	var index = (time) => new Promise((res) => setTimeout(res, ms(time.toString())));

	return index;

})));
