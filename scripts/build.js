process.on("unhandledRejection", (err) => {
  throw err;
});

const webpack = require("webpack");
const configFactory = require("../config/webpack.config.js");
const webpackConfig = configFactory("production");
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
  }
});
