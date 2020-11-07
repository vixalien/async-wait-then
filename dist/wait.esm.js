var ms = require('ms');
var index = (time) => new Promise((res) => setTimeout(res, ms(time.toString())));

export default index;
