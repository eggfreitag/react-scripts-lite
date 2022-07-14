const path = require("path");
const dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssRules = require("./cssRules");

module.exports = (node_env) => {
  const isDevEnv = node_env === "development";
  const isProdEnv = node_env === "production";

  return {
    target: "web",
    mode: isDevEnv ? "development" : isProdEnv && "production",
    entry: {
      index: path.resolve(__dirname, "../../../src/index"),
    },
    output: {
      path: path.resolve(__dirname, "../../../build"),
      filename: "static/js/[name].js",
      assetModuleFilename: "static/media/[name][ext]",
    },
    devtool: isDevEnv ? "eval" : isProdEnv && "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".json", ".css"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        ...cssRules(node_env),
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/, /\.svg$/],
          type: "asset",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../../../public/index.html"),
        favicon: path.resolve(__dirname, "../../../public/favicon.ico"),
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
      }),
      new dotenv(),
    ],
  };
};
