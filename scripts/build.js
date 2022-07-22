process.on("unhandledRejection", (err) => {
  throw err;
});

const webpack = require("webpack");
const configFactory = require("../config/webpack.config.js");
const webpackConfig = configFactory("production");
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) {
    if (err.includes(".env")) {
      console.log("You have no .env file");
    }
    console.log(err);
  }

  if (stats.errorCount === 0) {
    console.log("webpack: Compiled Successfully");
  }
});
