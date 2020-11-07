import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-auto-external";

export default [
	{
		input: './index.js',
		output: [
			{
				file: 'index.browser.umd.js',
				format: 'umd',
				plugins: [terser()]
			},
			{
				file: 'dist/wait.browser.esm.js',
				format: 'esm',
			},
			{
				file: 'dist/wait.browser.umd.js',
				format: 'umd',
				name: 'wait',
			},
			{
				file: 'dist/wait.browser.esm.min.js',
				format: 'esm',
				plugins: [terser()]
			},
			{
				file: 'dist/wait.browser.umd.min.js',
				format: 'umd',
				name: 'wait',
				plugins: [terser()]
			},
		],
		plugins: [commonjs(), resolve()]
	},
	{
		input: './index.js',
		output: [
			{
				file: 'index.esm.js',
				format: 'esm',
			},
			{
				file: 'index.umd.js',
				format: 'umd',
				name: 'wait',
			},
			{
				file: 'index.cjs.js',
				format: 'cjs',
				exports: 'auto'
			},
			{
				file: 'dist/wait.esm.js',
				format: 'esm',
			},
			{
				file: 'dist/wait.umd.js',
				format: 'umd',
				name: 'wait',
			},
			{
				file: 'dist/wait.esm.min.js',
				format: 'esm',
				plugins: [terser()]
			},
			{
				file: 'dist/wait.umd.min.js',
				format: 'umd',
				name: 'wait',
				plugins: [terser()]
			},
		],
		plugins: [commonjs(), resolve(), external()]
	}
]