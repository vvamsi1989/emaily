
if (process.env.NODE_ENV === 'production){
	module_exports = require('./prod');
} else {
	
	module_exports = require('./dev');
} 