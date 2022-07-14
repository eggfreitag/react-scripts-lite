const dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssRules = require("./cssRules");

module.exports = (node_env) => {
  const isDevEnv = node_env === "development";
  const isProdEnv = node_env === "production";

  return {
    mode: isDevEnv ? "development" : isProdEnv && "production",
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
    devServer: {
      port: "3000",
      static: {
        directory: "/public",
      },
      allowedHosts: ["all"],
      open: true,
      liveReload: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        favicon: "public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
      }),
      new dotenv(),
    ],
  };
};
