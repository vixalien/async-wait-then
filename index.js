var ms = require('ms');
export default (time) => new Promise((res) => setTimeout(res, ms(time.toString())));