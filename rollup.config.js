import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import auto from "@rollup/plugin-auto-install";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

var path = require("path");

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  // external: ["moment"],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    auto({
      pkgfile: "{cwd}/package.json",
      manager: "yarn"
    }),
    resolve({
      // some package.json files have a "browser" field which specifies
      // alternative files to load for people bundling for the browser. If
      // that's you, either use this option or add "browser" to the
      // "mainfields" option, otherwise pkg.browser will be ignored
      browser: true,
      dedupe: [
        "unifyre-react-helper",
        "unifyre-native-assets",
        "@iconify/react",
        "@iconify/icons-ion/md-arrow-dropdown"
      ],
      extensions: [".mjs", ".js", ".jsx", ".json"],
      mainFields: ["main", "module"],
      preferBuiltins: true,
      modulesOnly: true,
      jail: "/",
      rootDir: path.join(process.cwd())
    }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        // include: "node_modules/**",
        "unifyre-react-helper": ["ThemeContext", "Theme"],
        "unifyre-native-assets": ["getRenderedResource"],
        "@iconify": ["@iconify/icons-ion/md-arrow-dropdown"],
        "@iconify/icons-ion/md-arrow-dropdown": ["mdArrowDropdown"]
      }
    })
  ]
};
