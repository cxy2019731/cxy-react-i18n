import babel from "rollup-plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";

// 排除掉react，不作为打包项目
const external = ["react", "concent"];

export default {
  input: "./src/index.js",
  external,
  output: {
    name: "cxy-react-i18n",
    file: "./lib/bundle.js",
    format: "umd",
    globals: {
      react: "React",
      concent: "concent",
    },
  },
  plugins: [
    nodeResolve(),
    terser(),
    babel({
      exclude: "**/node_modules/**",
    }),
    uglify(),
  ],
};
