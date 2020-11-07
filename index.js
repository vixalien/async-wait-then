import ms from 'ms';
export default (time) => new Promise((res) => setTimeout(res, ms(time.toString())));