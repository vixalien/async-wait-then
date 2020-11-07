'use strict';

var ms = require('ms');
var index = (time) => new Promise((res) => setTimeout(res, ms(time.toString())));

module.exports = index;
