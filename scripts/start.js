process.on("unhandledRejection", (err) => {
  throw err;
});

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const DotenvWebpackPlugin = require("dotenv-webpack");
const WebpackDevServer = require("webpack-dev-server");
const configFactory = require("../config/webpackDevServer.config");

const args = process.argv.slice(2);
const port = parseInt(
  args[args?.findIndex((element) => element.includes("PORT"))]?.slice(5),
  10
);

const hasEnvFile = fs.existsSync(path.resolve(process.cwd(), ".env"));
const webpackConfig = configFactory("development", port);

hasEnvFile ? webpackConfig.plugins.push(new DotenvWebpackPlugin()) : null;
const compiler = webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer };
const server = new WebpackDevServer(devServerOptions, compiler);

try {
  server.start();
} catch (error) {
  server.stop();
}
