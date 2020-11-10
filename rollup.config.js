/*
 * @Author: PengKang
 * @Date: 2020-06-22 17:00:08
 * @LastEditors: PengKang
 * @LastEditTime: 2020-09-08 10:52:33
 * @FilePath: \react-library\rollup.config.js
 */

import babel from "rollup-plugin-babel";

export default {
	// 核心选项
	input: "./src/index.js", // 必须
	external: ["react", "react-dom", "styled-components"],
	plugins: [
		babel({
			exclude: "node_modules/**",
		}),
	],

	// // 额外选项
	// onwarn,

	// // danger zone
	// acorn,
	// context,
	// moduleContext,
	// legacy,

	output: {
		// 必须 (如果要输出多个，可以是一个数组)
		// 核心选项
		file: "./lib/bundle.js", // 必须
		format: "cjs", // 必须
		// name,
		// globals,

		// // 额外选项
		// paths,
		// banner,
		// footer,
		// intro,
		// outro,
		// sourcemap,
		// sourcemapFile,
		// interop,

		// // 高危选项
		// exports,
		// amd,
		// indent,
		// strict
	},
};
