// import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'umd',
		name: 'myLib',
		sourcemap: true
	},
	watch: {
	    include: 'src/**',
	    exclude: 'node_modules/**'
	},
	plugins: [ 
		resolve(),
		babel({
	      exclude: 'node_modules/**' // 只编译我们的源代码
	    })
		// json() 
	]
};