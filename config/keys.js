
if (process.env.NODE_ENV == 'PRODUCTION'){
	
	module_exports = require('./prod');
	
} else {
	
	module_exports = require('./dev');
} 